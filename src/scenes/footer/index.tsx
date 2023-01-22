import Logo from "@/assets/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
              <div>
                  <img src={Logo} alt="logo" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores libero natus, accusantium suscipit quas quaerat repellat. Dignissimos consectetur atque facilis aperiam assumenda. Illum ex, possimus eveniet voluptatibus nostrum reprehenderit ad.</p>
                  <p>Ⓒ Evogym All Rights Reserved.</p>
            </div>
              <div className="mt-16 basis-1/4 md:mt-0">
                  <h4 className="font-bold">Contact Us</h4>
                  <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
                  <p>(333) 425-6825</p>
              </div>
            <div></div>
          </div> 
    </footer>

    )
}

export default Footer