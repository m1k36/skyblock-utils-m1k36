'use client'

import {Product} from "@/types/bazaarTypes";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Separator} from "@radix-ui/react-menu";

interface ProductInfoProps {
    product: Product,
}

export default function ProductInfo({product}: ProductInfoProps) {

    const formatKeyName = (input: string): string => {
        return input
            .toLowerCase()
            .split("_")
            .map((word, index) => {
                return index === 0
                    ? word.charAt(0).toUpperCase() + word.slice(1)
                    : word;
            })
            .join(" ");
    }

    return (
        <>
            <section className="mt-4 mx-auto bg-gray-900 text-white p-4 rounded-lg shadow-md space-y-4">
                <h3 className="text-xl font-bold">{formatKeyName(product.quick_status.productId)}</h3>
                <p className="text-xs text-gray-400"><span
                    className="text-sm text-white font-semibold">Product ID : </span>{product.quick_status.productId}
                </p>
                <section className="flex flex-row justify-center max-h-85">
                    <ScrollArea className="flex flex-col w-1/2 border-gray-800 border-2 mr-2 rounded-lg">
                        <h3 className="text-xl text-red-400 font-bold w-ful mt-2 mb-2 text-center">Sell summary</h3>
                        {product.sell_summary.map((sell, index) => (
                            <div key={index} className="flex flex-col ml-2 mb-2">
                                <Separator className="w-70 m-1 mb-2 border-1 border-gray-800 self-center"/>
                                <h4 className="text-sm text-red-400 font-bold w-ful">Sell order n°{index}</h4>
                                <p>Amount
                                    : {sell.amount.toLocaleString("fr-FR").split(',')[0].replace(/\u202F/g, " ")}</p>
                                <p>Price per unit : {sell.pricePerUnit.toLocaleString("fr-FR")}</p>
                                <p>Orders
                                    : {sell.orders.toLocaleString("fr-FR").split(',')[0].replace(/\u202F/g, " ")}</p>
                            </div>
                        ))}
                        {product.sell_summary.length === 0 &&
                            <div className="flex flex-col ml-2 mb-2 align-center h-full">
                                <Separator className="w-70 m-1 mb-2 border-1 border-gray-800 self-center"/>
                                <h4 className="text-sm text-center font-bold w-ful">No sells</h4>
                            </div>
                        }
                    </ScrollArea>
                    <ScrollArea className="flex flex-col w-1/2 border-gray-800 border-2 ml-2 rounded-lg">
                        <h3 className="text-xl text-green-400 font-bold w-ful mt-2 mb-2 text-center">Buy summary</h3>
                        {product.buy_summary.map((buy, index) => (
                            <div key={index} className="flex flex-col ml-2 mb-2">
                                <Separator className="w-70 m-1 mb-2 border-1 border-gray-800 self-center"/>
                                <h4 className="text-sm text-green-400 font-bold w-ful">Buy order n°{index}</h4>
                                <p>Amount
                                    : {buy.amount.toLocaleString("fr-FR").split(',')[0].replace(/\u202F/g, " ")}</p>
                                <p>Price per unit
                                    : {buy.pricePerUnit.toLocaleString("fr-FR").split(',')[0].replace(/\u202F/g, " ")}</p>
                                <p>Orders
                                    : {buy.orders.toLocaleString("fr-FR").split(',')[0].replace(/\u202F/g, " ")}</p>
                            </div>
                        ))}
                        {product.buy_summary.length === 0 &&
                            <div className="flex flex-col ml-2 mb-2 align-center h-full">
                                <Separator className="w-70 m-1 mb-2 border-1 border-gray-800 self-center"/>
                                <h4 className="text-sm text-center font-bold w-ful">No buys</h4>
                            </div>
                        }
                    </ScrollArea>
                </section>

                <section className="flex flex-col gap-4 text-sm">
                    <h3 className="text-xl font-bold">Status and summary</h3>
                    <div className="flex flex-row">
                        <div className="w-1/2">
                            <h4 className="text-xl font-semibold text-red-400">Sell</h4>
                            <p><span
                                className="text-base font-semibold">Price:</span> {product.quick_status.sellPrice.toLocaleString("fr-FR").split(',')[0].replace(/\u202F/g, " ")}
                            </p>
                            <p><span
                                className="text-base font-semibold">Volume:</span> {product.quick_status.sellVolume.toLocaleString("fr-FR").split(',')[0].replace(/\u202F/g, " ")}
                            </p>
                            <p><span
                                className="text-base font-semibold">Orders:</span> {product.quick_status.sellOrders.toLocaleString("fr-FR").split(',')[0].replace(/\u202F/g, " ")}
                            </p>
                            <p><span
                                className="text-base font-semibold">Week Volume:</span> {product.quick_status.sellMovingWeek.toLocaleString("fr-FR").split(',')[0].replace(/\u202F/g, " ")}
                            </p>
                        </div>
                        <div className="w-1/2">
                            <h4 className="text-lg font-semibold text-green-400">Buy</h4>
                            <p><span
                                className="text-base font-semibold">Price:</span> {product.quick_status.buyPrice.toLocaleString("fr-FR").split(',')[0].replace(/\u202F/g, " ")}
                            </p>
                            <p><span
                                className="text-base font-semibold">Volume:</span> {product.quick_status.buyVolume.toLocaleString("fr-FR").split(',')[0].replace(/\u202F/g, " ")}
                            </p>
                            <p><span
                                className="text-base font-semibold">Orders:</span> {product.quick_status.buyOrders.toLocaleString("fr-FR").split(',')[0].replace(/\u202F/g, " ")}
                            </p>
                            <p><span
                                className="text-base font-semibold">Week Volume:</span> {product.quick_status.buyMovingWeek.toLocaleString("fr-FR").split(',')[0].replace(/\u202F/g, " ")}
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}