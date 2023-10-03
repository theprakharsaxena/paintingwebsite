import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import getAllProductsApi from "../../services/products/getAllProductsApi";
import MaterialReactTable from "material-react-table";
import { useQueryGetAllProducts } from "../../reactQuery/getAllProducts";
import { Delete, Edit } from "@mui/icons-material";
import createproductapi from "../../services/products/createproductapi";
import toast from "react-hot-toast";

const AdminProduct = () => {
  const drawerWidth = useSelector((state) => state.drawerWidth.value);
  const allProducts = useQueryGetAllProducts();
  const [data, setData] = useState([]);
  const [createModalOpen, setCreateModalOpen] = useState(false);

  const handleCreateNewRow = async (values) => {
    console.log("values", values);
    try {
      const res = await createproductapi({
        name: values["category.name"],
        description: values["description"],
        price: values["price"],
        quantity: values["quantity"],
        photo: values["photo"],
        category: values["quantity"],
      });
      if (res?.success) {
        toast.error(res?.message);
      } else {
        toast.success("Product Created Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    //send/receive api updates here, then refetch or update local table data for re-render
    exitEditingMode(); //required to exit editing mode and close modal
  };

  const handleCancelRowEdits = () => {
    // setValidationErrors({});
  };

  const handleDeleteRow = async () => {
    //
  };

  useEffect(() => {
    if (!allProducts.isLoading && allProducts?.data?.products) {
      setData(
        allProducts?.data?.products.map((obj) => ({ ...obj, image: obj?._id }))
      );
    }
  }, [allProducts]);

  const columns = [
    {
      accessorKey: "image",
      header: "Image",
      size: 30,
      Cell: ({ renderedCellValue, row }) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <img
            alt="avatar"
            height={30}
            src={`http://localhost:3000/api/v1/product/product-photo/${renderedCellValue}`}
            loading="lazy"
            style={{ borderRadius: "50%" }}
          />
        </Box>
      ),
    },
    {
      accessorKey: "name", //access nested data with dot notation
      header: "Name",
      size: 150,
    },
    {
      accessorKey: "description",
      header: "Description",
      size: 300,
    },
    {
      accessorKey: "price", //normal accessorKey
      header: "Price",
      size: 50,
    },
    {
      accessorKey: "quantity",
      header: "Quantity",
      size: 50,
    },
    {
      accessorKey: "category.name",
      header: "Category",
      size: 100,
    },
  ];

  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", p: 3, ml: drawerWidth }}
    >
      <Toolbar />
      <MaterialReactTable
        columns={columns}
        data={data}
        editingMode="modal" //default
        enableColumnOrdering
        enableEditing
        onEditingRowSave={handleSaveRowEdits}
        onEditingRowCancel={handleCancelRowEdits}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Tooltip arrow placement="left" title="Edit">
              <IconButton
              // onClick={() => table.setEditingRow(row)}
              >
                <Edit />
              </IconButton>
            </Tooltip>

            <Tooltip arrow placement="right" title="Delete">
              <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        )}
        renderTopToolbarCustomActions={() => (
          <Button
            color="secondary"
            onClick={() => setCreateModalOpen(true)}
            variant="contained"
          >
            Create New Product
          </Button>
        )}
      />
      <CreateNewAccountModal
        columns={columns}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleCreateNewRow}
      />
    </Box>
  );
};

export const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
  const [values, setValues] = useState(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ""] = "";
      return acc;
    }, {})
  );

  const handleSubmit = () => {
    //put your validation logic here
    onSubmit(values);
    onClose();
  };

  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center">Create New Account</DialogTitle>
      <DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack
            sx={{
              width: "100%",
              minWidth: { xs: "300px", sm: "360px", md: "400px" },
              gap: "1.5rem",
            }}
          >
            <TextField
                key={column.accessorKey}
                label={column.header}
                name={column.accessorKey}
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
            {columns.map((column) => (
              <TextField
                key={column.accessorKey}
                label={column.header}
                name={column.accessorKey}
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
            ))}
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: "1.25rem" }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="secondary" onClick={handleSubmit} variant="contained">
          Create New Account
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AdminProduct;
