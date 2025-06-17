import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart, User } from "lucide-react";

const Client = () => {

    const clientSays = [
        {
            id: 1,
            description: 'I am the CEO of LaptopTZ. We are a company dedicated to providing high-quality laptops at competitive prices. At LaptopTZ, our mission is to deliver reliable technology solutions and excellent customer service to students, professionals, and businesses across the country.',
            name: 'Qu.Thang',
            position: 'CEO, Company',
        },
        {
            id: 2,
            description: 'As the sun set behind the mountains, the sky transformed into a breathtaking canvas of gold, orange, and deep purple. Birds flew home in flocks, their silhouettes cutting across the fading light. The air grew cooler, carrying the soft scent of pine trees and fresh earth. In the distance, the gentle sound of a stream echoed through the quiet valley. It was a moment of calm and reflection, a reminder of the beauty and peace that nature offers when we take the time to pause and appreciate it.',
            name: 'Quang Thang',
            position: 'CEO, Company',
        },
        {
            id: 3,
            description: 'In the heart of the city, life moves quickly. Cars rush past, people hurry to work, and tall buildings shine under the morning sun. Yet, hidden between the busy streets, there are quiet cafés where time seems to pause. Inside, the smell of fresh coffee fills the air, and soft music plays in the background. It’s a perfect spot to relax, read a book, or simply watch the world go by.',
            name: 'Quang Thang',
            position: 'CEO, Company',
        },
    ]

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <div className="lg:container mx-auto ">

            <SectionTitle title="What is client says about us" mb='mb-11'></SectionTitle>

            <div className="slider-container w-full h-full">
                <Slider {...settings}>
                    {
                        clientSays?.map((client, index) => (
                            <div key={index} className="p-12 border-[1px] border-[#e1e1e3] rounded-lg">
                                <p className="text-2xl mb-4 text-[#636270] font-inter font-normal client_say_description">{client?.description}</p>
                                <div className="flex items-center">
                                    <h4><User size='4rem' /></h4>
                                    <div>
                                        <h4 className="text-2xl text-[#272343] font-inter font-medium capitalize mb-1.5">{client?.name}</h4>
                                        <p className="text-base text-[#9a9caa] font-inter capitalize font-normal">{client?.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>

        </div>
    );
};

export default Client;