"use server";

export default async function deleteOrder(orderId: any) {
    await fetch(`${process.env.SERVER_URL}/hapuspesanan/${orderId.orderId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': "application/json"
        }
    })
}