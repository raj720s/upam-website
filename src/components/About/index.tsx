

import Image from "next/image";
import upam from "C/about/upam-website 4.jpg"




const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container overflow-x-hidden">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  Leading Experts in Mobile and Software Development.
                </h2>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6" >
                  At Upam, we are passionate about crafting innovative mobile
                  and software solutions that drive businesses forward. Our team
                  of leading experts, each with over a decade of experience,
                  specializes in cutting-edge technology and software
                  development, ensuring our clients achieve their goals in an
                  increasingly digital world.With a team of seasoned experts, we combine innovation,
                  technical excellence, and a customer-centric approach to craft scalable, secure, and user-friendly applications.
                  Whether it’s creating intuitive mobile apps, developing robust enterprise software, or offering end-to-end digital transformation,
                  Upam-Website is committed to driving success for our clients through state-of-the-art technology and unwavering dedication to quality.
                  <br /> <br />
                  We believe in harnessing the power of technology to transform
                  businesses. Our vision is to be a trusted partner to companies
                  worldwide, helping them innovate and thrive in a rapidly
                  evolving digital landscape.
                </p>


              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div
                    className="wl-[400px]  h-[600px] "
                  >
                    <img
                      src="https://www.mygreatlearning.com/blog/wp-content/uploads/2020/07/iStock-1227556289.jpg"
                      alt="Upam team image"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>

                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="w-[400px] h-[300px]">
                    <img
                      src="https://media.licdn.com/dms/image/D4E12AQEnNKiiNUKz9Q/article-cover_image-shrink_720_1280/0/1693476739453?e=2147483647&v=beta&t=vA7q5Jo23C2UXQE4FQ3lTlpB7ugmZa5QZzAfSQ5rQ-A"
                      alt="Upam project Showcase"
                      loading="lazy"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="w-[400px] h-[300px]">
                    <img
                      src="https://www.simplilearn.com/ice9/free_resources_article_thumb/cyber_security_vs_software_engineering.jpg"
                      loading="lazy"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>



                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;



