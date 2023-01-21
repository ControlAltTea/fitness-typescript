import {useForm} from "react-hook-form"
import { SelectedPage } from '@/shared/types';
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import HText from "@/shared/HText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            // prevents the page from refreshing
            e.preventDefault();
        }
    }

  return (
      <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
          <motion.div onViewportEnter={()=> SelectedPage.ContactUs}>
              <motion.div className="md:w-3/5"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                      hidden: {
                          opacity: 0,
                          x: -50
                      },
                      visible: {opacity:1, x:0},
                  }}
              >
                  <HText>
                      <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
                  </HText>
                  <p className="my-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, quaerat nulla fugit consequuntur itaque voluptate laborum delectus dolorem obcaecati quidem eos explicabo dolorum, voluptates beatae? Unde eum similique debitis velit!
                  </p>
              </motion.div>
              {/* FORM AND IMAGE */}
              <div className="mt-10 justify-between gap-8 md:flex">
                  <motion.div className="mt-10 basis-3/5 md:mt-0"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                      variants={{
                          hidden: { opacity: 0, y: 50 },
                          visible: {opacity: 1, y: 0},
                      }}
                  >
                      <form
                          target="_blank"
                          onSubmit={onSubmit}
                          method="POST"
                          action={`{https://formsubmit.com/${your@email.com}`}
                      >
                          
                      </form>
                  </motion.div>
              </div>
          </motion.div>
    </section>
    )
}

export default ContactUs