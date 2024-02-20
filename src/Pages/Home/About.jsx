import aboutPic1 from '../../assets/img/ab-1-removebg-preview.png'
import aboutPic2 from '../../assets/img/ab-2-removebg-preview.png'
const About = () => {
    return (
        <div className="py-16 px-2">
            <div className="container mx-auto">
                <div className="flex flex-col gap-4 py-3 md:flex-row">
                    <div className="w-full md:w-2/5">
                        <h2 className="text-4xl font-bold mb-5">About Us</h2>
                        <p>
                            At KiddieKorner, we are dedicated to creating magical moments for children and families through our thoughtfully curated collection of toys. With a deep understanding of the importance of play in a childs development, we strive to inspire imagination, foster creativity, and ignite a lifelong love for learning.
                        </p>
                        <br />
                        <p>
                            Our journey began with a simple vision: to offer high-quality, safe, and engaging toys that spark joy and wonder in every childs heart.
                        </p>
                    </div>
                    <div className="md:w-3/5 w-full">
                        <img src={aboutPic1} alt="" />
                    </div>
                </div>
                <div className="flex flex-col py-3 items-center gap-4 md:flex-row-reverse">
                    <div className="w-full md:w-2/5">
                        <p>
                            We believe that every child is unique, and our diverse range of toys reflects this belief.
                        </p>
                        <br />
                        <p>
                            At KiddieKorner, we are more than just a toy store - we are a celebration of childhood, a beacon of joy, and a trusted partner in your childs growth and development. Join us as we continue to spread smiles, spark imagination, and make playtime truly magical for children everywhere.
                        </p>
                    </div>
                    <div className="md:w-3/5 w-full">
                        <img src={aboutPic2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;