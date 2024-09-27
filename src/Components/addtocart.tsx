function AddToButton({name}:{name:string}) {
  return(
      <main>
          <div>
              <button className="bg-primaryColor hover:bg-orange-400 text-white font-bold py-4 px-6 rounded">
                 {name}
              </button>
          </div>
      </main>
  )
}

export default AddToButton;