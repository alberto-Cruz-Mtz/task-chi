import Product from "./Product";

export interface Product {
  id?: number;
  code: string;
  description: string;
  sale: string;
  purchasePrice: number;
  salesprice: number;
  mayoreo: number;
  category: string;
  quantity: number;
}

export interface FetchDate<T> {
  status: boolean;
  message: string;
  data: T;
}

export async function addProduct(product: Product): Promise<unknown> {
  try {
    const response = await fetch("http://localhost:8080/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateProduct(code: string, product: Product) {
  try {
    const response = await fetch(`http://localhost:8080/product/${code}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProduct(code: string) {
  try {
    const response = await fetch(`http://localhost:8080/product/${code}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getProduct(code: string) {
  try {
    const response = await fetch(`http://localhost:8080/product/${code}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllProduct() {
  try {
    const response = await fetch("http://localhost:8080/product", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

//await getProduct("d").then((result) => console.log(result));
//await getAllProduct().then((res) => console.table(res.data));
