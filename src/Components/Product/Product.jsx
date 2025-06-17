import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { ShoppingCart } from "lucide-react";

const Product = () => {

    const [active, setActive] = useState({
        id: 0,
        product: 'all'
    });

    const productTitle = [
        {
            id: 0,
            title: "all",
            product: 'all'
        },
        {
            id: 1,
            title: "newest",
            product: 'newest'
        },
        {
            id: 2,
            title: "trending",
            product: 'trending'
        },
        {
            id: 3,
            title: "best seller",
            product: 'best_seller'
        },
    ];



    const products = [
        {
            title: 'Laptop ASUS ExpertBook B1 B1402CVA NK1280',
            status: 'New',
            price: '13.490.000 VND',
            image: '/src/assets/products/laptop1.png',
            product: 'newest',
        },
        {
            title: 'Laptop Dell Inspiron 15 3520 i5U165W11BLU-FP',
            status: 'Sales',
            price: '15.290.000 VND',
            image: '/src/assets/products/laptop2.png',
            product: 'newest',
        },
        {
            title: 'Laptop MSI Prestige 14 AI Studio C1UDXG 058VN',
            status: 'New',
            price: '28.790.000 VND',
            image: '/src/assets/products/laptop3.png',
            product: 'newest',
        },
        {
            title: 'Apple MacBook Air M2 2024 8CPU 8GPU 16GB 256GB',
            status: 'Sales',
            price: '24.990.000 VND',
            image: '/src/assets/products/laptop4.png',
            product: 'newest',
        },

        {
            title: 'Samsung Galaxy S25 Ultra 12GB 256GB',
            status: 'Sales',
            price: '28.490.000 VND',
            image: '/src/assets/products/phone1.png',
            product: 'trending',
        },
        {
            title: 'Samsung Galaxy S25 256GB',
            status: 'New',
            price: '19.690.000 VND',
            image: '/src/assets/products/phone2.png',
            product: 'trending',
        },
        {
            title: 'iPhone 16 Pro Max 256GB',
            status: 'Sales',
            price: '30.490.000 VND',
            image: '/src/assets/products/phone3.png',
            product: 'trending',
        },
        {
            title: 'ASUS Prime GeForce RTX 5070 Ti 16GB GDDR7 OC Edition',
            status: 'Sales',
            price: '29.490.000 VND',
            image: '/src/assets/products/vga1.png',
            product: 'trending',
        },
        {
            title: 'Laptop ASUS ExpertBook B1 B1402CVA NK1280',
            status: 'New',
            price: '13.490.000 VND',
            image: '/src/assets/products/laptop1.png',
            product: 'best_seller',
        },
        {
            title: 'Laptop Dell Inspiron 15 3520 i5U165W11BLU-FP',
            status: 'Sales',
            price: '15.290.000 VND',
            image: '/src/assets/products/laptop2.png',
            product: 'best_seller',
        },
        {
            title: 'Laptop MSI Prestige 14 AI Studio C1UDXG 058VN',
            status: 'Sales',
            price: '28.790.000 VND',
            image: '/src/assets/products/laptop3.png',
            product: 'best_seller',
        },
        {
            title: 'Samsung Galaxy S25 Ultra 12GB 256GB',
            status: 'Sales',
            price: '28.490.000 VND',
            image: '/src/assets/products/phone1.png',
            product: 'best_seller',
        },
        {
            title: 'Samsung Galaxy S25 256GB',
            status: 'Sales',
            price: '19.690.000 VND',
            image: '/src/assets/products/phone2.png',
            product: 'featured',
        },
        {
            title: 'iPhone 16 Pro Max 256GB',
            status: 'Sales',
            price: '30.490.000 VND',
            image: '/src/assets/products/phone3.png',
            product: 'featured',
        },
        {
            title: 'ASUS Prime GeForce RTX 5070 Ti 16GB GDDR7 OC Edition',
            status: 'Sales',
            price: '29.490.000 VND',
            image: '/src/assets/products/vga1.png',
            product: 'featured',
        },
        {
            title: 'Laptop ASUS ExpertBook B1 B1402CVA NK1280',
            status: 'Sales',
            price: '13.490.000 VND',
            image: '/src/assets/products/laptop1.png',
            product: 'featured',
        },
        {
            title: 'Laptop Dell Inspiron 15 3520 i5U165W11BLU-FP',
            status: 'Sales',
            price: '15.290.000 VND',
            image: '/src/assets/products/laptop2.png',
            product: 'all',
        },
        {
            title: 'Laptop MSI Prestige 14 AI Studio C1UDXG 058VN',
            status: 'Sales',
            price: '28.790.000 VND',
            image: '/src/assets/products/laptop3.png',
            product: 'all',
        },
        {
            title: 'Apple MacBook Air M2 2024 8CPU 8GPU 16GB 256GB',
            status: 'Sales',
            price: '24.990.000 VND',
            image: '/src/assets/products/laptop4.png',
            product: 'all',
        },
        {
            title: 'Samsung Galaxy S25 Ultra 12GB 256GB',
            status: 'Sales',
            price: '28.490.000 VND',
            image: '/src/assets/products/phone1.png',
            product: 'all',
        },
        {
            title: 'Samsung Galaxy S25 256GB',
            status: 'Sales',
            price: '19.690.000 VND',
            image: '/src/assets/products/phone2.png',
            product: 'all',
        },
        {
            title: 'iPhone 16 Pro Max 256GB',
            status: 'Sales',
            price: '30.490.000 VND',
            image: '/src/assets/products/phone3.png',
            product: 'all',
        },
        {
            title: 'ASUS Prime GeForce RTX 5070 Ti 16GB GDDR7 OC Edition',
            status: 'Sales',
            price: '29.490.000 VND',
            image: '/src/assets/products/vga1.png',
            product: 'all',
        },
        {
            title: 'Laptop ASUS ExpertBook B1 B1402CVA NK1280',
            status: 'Sales',
            price: '13.490.000 VND',
            image: '/src/assets/products/laptop1.png',
            product: 'all',
        },


    ];


    const productFilter = products.filter(product => product.product === active?.product);
    console.log(productFilter);


    return (
        <div className="lg:container mx-auto">
            <div className="flex flex-col items-center justify-center">
                <SectionTitle title={'our product'} textAlign={'center'} mb={'mb-5'}></SectionTitle>


                <div className="flex items-center justify-center gap-6 mb-11">
                    {
                        productTitle?.map((title, indx) => (
                            <button key={title?.id}

                                onClick={() => setActive({
                                    id: title?.id,
                                    product: title?.product
                                })}
                                className={`text-base font-black uppercase font-inter cursor-pointer ${active?.id === indx ? 'text-[#272343]' : 'text-[#9a9caa]'
                                    }`}>
                                {title?.title}
                            </button>
                        ))
                    }
                </div>
            </div>


            <div className="grid grid-cols-4 items-center gap-6">
                {

                    productFilter?.map((product, index) => (
                        <div key={index} className="p-4">
                            <div className="feature_image mb-4 relative">
                                <img className="w-full max-h-[312px] rounded-lg object-cover" src={product?.image} alt={product?.title} />
                                {
                                    product?.status && (
                                        <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-lg">
                                            <button className="text-sm font-inter font-normal">{product?.status}</button>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="feature_content">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-base text-[#007580] capitalize font-inter font-normal mb-4">{product?.title}</h4>
                                    <span className="bg-[#007580] h-[44px] w-[44px] rounded-lg flex items-center justify-center"><ShoppingCart size='1.5rem' color="#fff" /></span>
                                </div>
                                <p className="text-xl flex items-center gap-2 text-[#272343] font-semibold font-inter ">
                                    {product?.price}
                                    {
                                        product?.currentPrice && (
                                            <span className="text-sm text-[#9a9caa] font-inter font-normal">{product?.currentPrice}</span>
                                        )
                                    }
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Product;