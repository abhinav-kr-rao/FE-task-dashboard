"use client";

import { useState } from "react";
import pizzaOrdersData from "../data/pizaaOrdersData";
import Image from "next/image";
import Sidebar from "../component/sidebar";

const Orders = () => {
  const [orders, setOrders] = useState(pizzaOrdersData);

  const src = ["/down-arrow", "/up-arrow"];
  const sort = (col) => {
    const newData = [...col].sort((a, b) => (a[col] > b[col] ? 1 : -1));

    setOrders(newData);
  };

  return (
    <div className=" flex">
      <Sidebar />
      <div className=" p-4 self-center content-center mx-auto">
        <h1 className="text-4xl font-bold m-6 text-center">Pizza Orders</h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-full bg-yellow-50 rounded-lg ">
            <thead className="bg-gray-600 text-white">
              <tr>
                <th className="py-5 px-4 items-center text-left font-semibold ">
                  Order ID
                </th>
                <th className="py-5 px-4 items-center text-left font-semibold ">
                  Customer Name
                </th>
                <th className="py-5 px-4 items-center text-left font-semibold ">
                  Type
                </th>
                <th className="py-5 px-4 items-center text-left font-semibold ">
                  Quantity
                </th>
                <th className="py-5 px-4 items-center text-left font-semibold ">
                  Order Date
                </th>
                <th className="py-5 px-4 items-center text-left font-semibold ">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((pizza) => (
                <tr key={pizza.orderId} className="border-t hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm items-center text-gray-800">
                    {pizza.orderId}
                  </td>
                  <td className="py-3 px-4 text-sm items-center text-gray-800">
                    {pizza.customerName}
                  </td>
                  <td className="py-3 px-4 text-sm items-center text-gray-800">
                    {pizza.pizzaType}
                  </td>
                  <td className="py-3 px-4 text-sm items-center text-gray-800">
                    {pizza.quantity}
                  </td>
                  <td className="py-3 px-4 text-sm items-center text-gray-800">
                    {pizza.orderDate}
                  </td>
                  <td className="py-3 px-4 text-sm">
                    <span
                      className={`inline-flex items-center px-3 font-normal text-xl
                      ${
                        pizza.status === "Delivered"
                          ? "bg-green-100 text-green-800"
                          : ""
                      }
                      ${
                        pizza.status === "Preparing"
                          ? "bg-blue-100 text-blue-800"
                          : ""
                      }
                      ${
                        pizza.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : ""
                      }
                      ${
                        pizza.status === "Out for Delivery"
                          ? "bg-purple-100 text-purple-800"
                          : ""
                      }
                        ${
                          pizza.status === "Cancelled"
                            ? "bg-red-100 text-red-800"
                            : ""
                        }
                    `}
                    >
                      {pizza.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {orders.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">No orders found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
