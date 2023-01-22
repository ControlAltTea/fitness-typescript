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
              <div>
                  <h4 className="font-bold">Links</h4>
                  <p className="my-5">Massa orci senectus</p>
                  <p className="my-5">Et gravida id et etiam</p>
                  <p></p>
              </div>
            <div></div>
          </div> 
    </footer>

    )
}

export default Footer