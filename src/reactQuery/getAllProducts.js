import { useQuery } from "@tanstack/react-query";
import getAllProductsApi from "../services/products/getAllProductsApi";

export function useQueryGetAllProducts() {
  const query = useQuery({
    queryKey: ["all-products"],
    queryFn: () => getAllProductsApi(),
  });
  return query;
}
