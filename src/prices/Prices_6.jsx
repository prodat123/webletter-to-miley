import React from 'react'

function Prices_6() {
    const plans = [
        {
            name: "3 MONTHS",
            price: '399.000',
            features: {
                "Joining Fee": "199.000",
                "PIF": "1.197.000",
                
    
            },
        },
        {
            name: "6 MONTHS",
            price: '315.000',
            features: {
                "Joining Fee": "199.000",
                "PIF": "1.890.000",   
            },
        },
        {
            name: "12 MONTHS",
            price: '269.083',
            features: {
                "Joining Fee": "199.000",
                "PIF": "3.229.000",
                
            },
        },
        {
            name: "24 MONTHS",
            price: '224.083',
            features: {
                "Joining Fee": "199.000",
                "PIF": "5.378.600",
               
            },
        },
    ];

    return (
        <section className='py-14'>
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className='relative max-w-xl mx-auto sm:text-center'>
                    <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                        Founder Membership
                    </h3>
                    <div className='mt-3 max-w-xl'>
                        <p>
                            
                        </p>
                    </div>
                </div>
                <div className='mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-4'>
                    {
                        plans.map((item, idx) => (
                            <div key={idx} className='relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2'>
                                <div>
                                    <span className='text-primary font-medium'>
                                        {item.name}
                                    </span>
                                    <div className='mt-4 text-gray-800 text-3xl font-semibold'>
                                        Rp{item.price} <span className="text-xl text-gray-600 font-normal">/mo</span>
                                    </div>
                                </div>
                                <ul className='py-8 space-y-3'>
                                    
                                        <h1 className='text-lg'>Joining Fee</h1>
                                        <p className='text-xl font-semibold'>Rp{item.features['Joining Fee']}</p>
                                        <br></br>
                                        <h1 className='text-lg'>PIF</h1>
                                        <p className='text-xl font-semibold'>Rp{item.features['PIF']}</p>
                                        {/* item.features.map((featureItem, idx) => (
                                            <li key={idx} className='flex items-center gap-5'>
                                                {/* <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    className='h-5 w-5 text-indigo-600'
                                                    viewBox='0 0 20 20'
                                                    fill='currentColor'>
                                                    <path
                                                        fill-rule='evenodd'
                                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                        clip-rule='evenodd'></path>
                                                </svg> 
                                                {featureItem}
                                            </li>
                                        )) */}
                                    
                                </ul>
                                {/* <div className="flex-1 flex items-end">
                                    <button className='px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700'>
                                        Get Started
                                    </button>
                                </div> */}
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Prices_6