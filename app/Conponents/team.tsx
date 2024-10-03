


export default function Team(){

    return(

<section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-8 mx-auto my-5 md:justify-center">
        <h2 className="text-2xl font-bold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Faclty Memembers</h2>

        <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-16">
            <div className="w-full max-w-xs text-center">
                <img className="object-cover object-center w-full h-full mx-auto rounded-lg hover:scale-110" src="/Abdul Manan.jpg"/>

                <div className="mt-2">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Abdul Manan Gadani</h3>
                    <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">Director</span>
                </div>
            </div>

            <div className="w-full max-w-xs text-center">
                <img className="object-cover object-center w-full h-full mx-auto rounded-lg hover:scale-110" src="/Essa.jpg" alt="avatar" />

                <div className="mt-2">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Muhammad Essa Gadani</h3>
                    <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">Admin</span>
                </div>
            </div>

            <div className="w-full max-w-xs text-center">
                <img className="object-cover object-center w-full h-full mx-auto rounded-lg hover:scale-110" src="j.jpg" alt="avatar" />

                <div className="mt-2">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Jahanzeb Ali Gadani</h3>
                    <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">English Tutor</span>
                </div>
            </div>

        </div>
    </div>


    
</section>

    )
}