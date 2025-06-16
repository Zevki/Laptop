
const Brand = () => {

    const brands = [
        {
            id: 1,
            image: "/src/assets/brands/momo.png"
        },
        {
            id: 2,
            image: "/src/assets/brands/teckcombank.png"
        },

        {
            id: 3,
            image: "/src/assets/brands/visa.png"
        },

        {
            id: 4,
            image: "/src/assets/brands/vietinbank.png"
        },

        {
            id: 5,
            image: "/src/assets/brands/zalo.png"
        },

        
        
 
    ]

    return (
        <div className="lg:container mx-auto">
            <div className="grid grid-cols-5 items-center justify-center gap-5">
                {
                    brands?.map((brand) => (
                        <div key={brand?.id} className="brand_item">
                            <img className="w-auto h-auto" src={brand?.image} alt="brand" />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Brand;