import { useState } from 'react';
import baby1 from '../../assets/img/baby-play-1-removebg-preview.png'
import { useEffect } from 'react';
import FAQsItem from '../../Components/FAQsItem';
const FAQs = () => {

    const [faq, setFaq] = useState([])
    useEffect(() => {
        fetch('fake-faq.json')
            .then(res => res.json())
            .then(data => setFaq(data))
    }, [])
    return (
        <div className="py-16 px-2">
            <div className="container mx-auto flex flex-col md:flex-row">
                <div className="w-full md:w-2/3">
                    <div className='pb-3 '>
                        <h2 className='text-3xl font-bold'>FAQs</h2>
                        <p className='text-Second max-w-lg'>Discover a world of wonder and imagination with our delightful collection of toys.</p>
                    </div>
                    <div className=' space-y-2'>
                        {faq.map(faqs => <FAQsItem key={faqs.id} faqs={faqs}></FAQsItem>)}
                    </div>

                </div>
                <div className="w-full md:w-1/3 flex items-center">
                    <img className='w-full' src={baby1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FAQs;