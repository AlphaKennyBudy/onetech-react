import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductType } from "../../store/types";
import { calculateTotal } from "../../utils/calculateTotal";
import { Table, InputNumber, Button } from "antd";
import Column from "antd/lib/table/Column";
import { filterableCart } from "../../utils/filterableCart";

function Cart() {
  const state = useSelector(
    (state: { productReducer: ProductType[] }) => state.productReducer
  );
  const dispatch = useDispatch();
  const filteredCart = filterableCart(state, dispatch);
  return (
    <Table
      dataSource={filteredCart}
      pagination={{ pageSize: 5 }}
      locale={{
        filterConfirm: "Ok",
        filterReset: "Reset",
        emptyText: "No Orders",
      }}
      title={() => <h1>Cart</h1>}
      footer={() => (
        <h3 style={{ float: "right" }}>Total {calculateTotal(state)}</h3>
      )}
    >
      <Column title="Item" dataIndex="name" key="name" />
      <Column title="Price" dataIndex="price" key="price" />
      <Column
        title="Quantity"
        key="quantity"
        render={({ quantity, onChange }) => (
          <InputNumber
            type="number"
            onChange={onChange}
            value={quantity}
            min={0}
          />
        )}
      />
      <Column title="Total Price" dataIndex="total" key="total" />
      <Column
        dataIndex="onCancel"
        key="cancel"
        render={(onCancel) => <Button onClick={onCancel}>Delete</Button>}
      />
    </Table>
  );
}

export default Cart;
