import { useState } from 'react';

function TemplateForm() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4; // Total number of pages in the form

  //form data states
  const [propertyType, setPropertyType] = useState('house');
  const [tenancyStart, setTenancyStart] = useState('');
  const [tenancyEndDate, setTenancyEndDate] = useState('');
  const [propertyAddress, setPropertyAddress] = useState('');
  const [hasParking, setHasParking] = useState(false);
  const [hasFurnishing, setHasFurnishing] = useState(false);
  const [landlordType, setLandlordType] = useState('individual');
  const [landlordName, setLandlordName] = useState('');
  const [landlordAddress, setLandlordAddress] = useState('');
  const [landlordPhone, setLandlordPhone] = useState('');
  const [landlordEmail, setLandlordEmail] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [tenantPhone, setTenantPhone] = useState('');
  const [tenantEmail, setTenantEmail] = useState('');
  const [otherTenants, setOtherTenants] = useState([]);
  const [allowOccupants, setAllowOccupants] = useState(false);
  const [occupants, setOccupants] = useState([]);
  const [rentPaymentFrequency, setRentPaymentFrequency] = useState('monthly');
  const [rentAmount, setRentAmount] = useState('');
  const [rentPaymentDate, setRentPaymentDate] = useState('');
  const [payUtilities, setPayUtilities] = useState(false);
  const [allowPets, setAllowPets] = useState(false);
  const [allowSmoking, setAllowSmoking] = useState(false);
  const [responsibilityForMaintenance, setResponsibilityForMaintenance] = useState(false);
  const [allowHomeBusiness, setAllowHomeBusiness] = useState(false);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  // Helper function to handle previous button click
  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleAddTenant = () => {
    setOtherTenants([...otherTenants, { name: '', phone: '', email: '' }]);
  };

  const handleAddOccupant = () => {
    setOccupants([...occupants, { name: '', phone: '', email: '' }]);
  };

  const handleRemoveTenant = (index) => {
    setOtherTenants([...otherTenants.slice(0, index), ...otherTenants.slice(index + 1)]);
  };

  const handleRemoveOccupant = (index) => {
    setOccupants([...occupants.slice(0, index), ...occupants.slice(index + 1)]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Do something with the form data here
  };

  // Render form fields based on the current page
  const renderFormFields = () => {
    switch (currentPage) {
      case 1:
        return (
          //General section
          <fieldset>
            <legend className="mx-20 font-bold text-2xl">1.0 General</legend>
            <div>
              <h3 className=" mx-20 mt-3 mb-2 font-bold">Room Type:</h3>
            </div>
            <div className="flex mx-20 mb-5 items-center">

              <label>
                <input type="radio" value="house" checked={propertyType === 'house'} onChange={() => setPropertyType('house')} />
                <span className="ml-2">House</span>
              </label>
              <label className="flex mx-5 items-center">
                <input type="radio" value="apartment" checked={propertyType === 'apartment'} onChange={() => setPropertyType('apartment')} />
                <span className="ml-2">Apartment</span>
              </label>
              <label>
                <input type="radio" value="condo" checked={propertyType === 'condo'} onChange={() => setPropertyType('condo')} />
                <span className="ml-2">Condo</span>
              </label>
              <label className="flex mx-5 items-center">
                <input type="radio" value="room" checked={propertyType === 'room'} onChange={() => setPropertyType('room')} />
                <span className="ml-2">Room</span>
              </label>
              <label>
                <input type="radio" value="other" checked={propertyType === 'other'} onChange={() => setPropertyType('other')} />
                <span className="ml-2">Other</span>
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <h3 className=" ml-20 mr-5 mt-2 mb-2 font-bold">Tenancy Start Date:</h3>
                <input type="date" value={tenancyStart} onChange={(event) => setTenancyStart(event.target.value)} className="rounded-full border-gray-300 bg-gray-100 pl-4 pr-4 py-2" />
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <h3 className=" ml-20 mr-5 mt-2 mb-2 font-bold">Tenancy Start Date:</h3>
                <input type="date" name="tenancy-end-date" value={tenancyEndDate} onChange={(e) => setTenancyEndDate(e.target.value)} className="rounded-full border-gray-300 bg-gray-100 mt-2 pl-4 pr-4 py-2" />
              </label>
            </div>
          </fieldset>
        );
      case 2:
        return (
          //Property section 
          <fieldset>
            <legend className="mx-20 font-bold text-2xl">2.0 Property</legend>
            <div className="flex items-center">
              <label className="flex items-center">
              <h3 className=" ml-20 mr-2 mt-3 font-bold">Property address:</h3>
                <input type="text" value={propertyAddress} 
                onChange={(event) => setPropertyAddress(event.target.value)} 
                className="border border-gray-700 rounded px-3 py-1 mt-3"/>
              </label>
            </div>
            <div>
              <label>
              <h3 className=" mx-20 mb-2 mt-2 font-bold">Will tenant have access to parking?</h3>
                
                <input className=" ml-20 mr-2 mb-2 font-bold" type="radio" value="yes" checked={hasParking} onChange={() => setHasParking(true)} />
                Yes
                <input className=" ml-10 mr-2 mb-2 font-bold" type="radio" value="no" checked={!hasParking} onChange={() => setHasParking(false)} />
                No
              </label>
            </div>
            <div>
              <label>
              <h3 className=" mx-20 mb-2 font-bold">Does the property include any furnishing?</h3>
                <input className=" ml-20 mr-2 mb-2 font-bold" type="radio" value="yes" checked={hasFurnishing} onChange={() => setHasFurnishing(true)} />
                Yes
                <input className=" ml-10 mr-2 mb-2 font-bold" type="radio" value="no" checked={!hasFurnishing} onChange={() => setHasFurnishing(false)} />
                No
              </label>
            </div>
          </fieldset>
        );
      case 3:
        return (
          //Parties section
          <fieldset>
            <legend className="mx-20 font-bold text-2xl">3.0 Parties</legend>
            <div>
            <h3 className=" mx-20 mt-3 font-bold">Landlord Details</h3>
              <div>
                <label className="flex mx-20 items-center">
                  <input type="radio" value="individual" checked={landlordType === 'individual'} onChange={() => setLandlordType('individual')}  />
                  <span className="ml-2">Individual</span>
                </label>
                <label className="flex mx-20 items-center">
                  <input type="radio" value="company" checked={landlordType === 'company'} onChange={() => setLandlordType('company')} />
                  <span className="ml-2">Company/Organization</span>
                </label>
              </div>
              <div className="flex items-center">
                <label className="flex items-center">
                <h3 className=" ml-20 mr-2 mt-3 font-bold">Name: </h3>
                  <input type="text" value={landlordName} onChange={(event) => setLandlordName(event.target.value)} 
                  className="border border-gray-700 rounded px-3 py-1 mt-3"/>
                </label>
              </div>
              <div className="flex items-center">
                <label className="flex items-center">
                <h3 className=" ml-20 mr-2 mt-3 font-bold">Address: </h3>
                  
                  <input type="text" value={landlordAddress} onChange={(event) => setLandlordAddress(event.target.value)} 
                  className="border border-gray-700 rounded px-3 py-1 mt-3"/>
                </label>
              </div>
              <div className="flex items-center">
                <label className="flex items-center">
                <h3 className=" ml-20 mr-2 mt-3 font-bold">Contact phone: </h3>

                  <input type="text" value={landlordPhone} onChange={(event) => setLandlordPhone(event.target.value)} 
                  className="border border-gray-700 rounded px-3 py-1 mt-3"/>
                </label>
              </div>
              <div className="flex items-center">
                <label className="flex items-center">
                <h3 className=" ml-20 mr-2 mt-3 font-bold">Contact email (optional): </h3>
                  
                  <input type="text" value={landlordEmail} onChange={(event) => setLandlordEmail(event.target.value)} 
                  className="border border-gray-700 rounded px-3 py-1 mt-3"/>
                </label>
              </div>
            </div>
            <div>
            <h3 className=" mx-20 mt-10 font-bold">Tenant Details</h3>
              <div className="flex items-center">
                <label className="flex items-center">
                <h3 className="ml-20 mr-2 mt-3 font-bold">Name:</h3>
                  <input type="text" value={tenantName} onChange={(event) => setTenantName(event.target.value)} 
                  className="border border-gray-700 rounded px-3 py-1 mt-3"/>
                </label>
              </div>
              <div className="flex items-center">
                <label className="flex items-center">
                <h3 className="ml-20 mr-2 mt-3 font-bold">Contact phone:</h3>
                  <input type="text" value={tenantPhone} onChange={(event) => setTenantPhone(event.target.value)} 
                  className="border border-gray-700 rounded px-3 py-1 mt-3"/>
                </label>
              </div>
              <div className="flex items-center">
                <label className="flex items-center">
                <h3 className="ml-20 mr-2 mt-3 font-bold">Contact email (optional):</h3>
                  <input type="text" value={tenantEmail} onChange={(event) => setTenantEmail(event.target.value)} 
                  className="border border-gray-700 rounded px-3 py-1 mt-3"/>
                </label>
              </div>
              {otherTenants.map((otherTenant, index) => (
                <div key={index

                }>
                  <legend className=" mx-20 mt-8 font-bold">Other Tenant {index + 1}</legend>
                  <div className="flex items-center">
                    <label className="flex items-center">
                    <h3 className="ml-20 mr-2 mt-3 font-bold">Name:</h3>
                      <input
                        type="text"
                        value={otherTenant.name}
                        onChange={(event) => {
                          const updatedTenants = [...otherTenants];
                          updatedTenants[index].name = event.target.value;
                          setOtherTenants(updatedTenants);
                        }} className="border border-gray-700 rounded px-3 py-1 mt-3"
                      />
                    </label>
                  </div>
                  <div className="flex items-center">
                    <label className="flex items-center">
                    <h3 className="ml-20 mr-2 mt-3 font-bold">Contact phone:</h3>
                      <input
                        type="text"
                        value={otherTenant.phone}
                        onChange={(event) => {
                          const updatedTenants = [...otherTenants];
                          updatedTenants[index].phone = event.target.value;
                          setOtherTenants(updatedTenants);
                        }} className="border border-gray-700 rounded px-3 py-1 mt-3"
                      />
                    </label>
                  </div>
                  <div className="flex items-center">
                    <label className="flex items-center">
                    <h3 className="ml-20 mr-2 mt-3 font-bold">Contact email (optional):</h3>
                      <input
                        type="text"
                        value={otherTenant.email}
                        onChange={(event) => {
                          const updatedTenants = [...otherTenants];
                          updatedTenants[index].email = event.target.value;
                          setOtherTenants(updatedTenants);
                        }} className="border border-gray-700 rounded px-3 py-1 mt-3"
                      />
                    </label>
                  </div>
                  <button type="button" onClick={() => handleRemoveTenant(index)} className="bg-red-500 hover:bg-red-400 text-white hover:text-white py-1 px-2 ml-20 mt-2 border border-red-500 hover:border-transparent rounded">
                    Remove
                  </button>
                </div>
              ))}
              <button type="button" onClick={handleAddTenant} className="bg-blue-500 hover:bg-blue-400 text-white hover:text-white py-1 px-2 ml-20 mt-2 border border-blue-500 hover:border-transparent rounded">
                Add Another Tenant
              </button>
            </div>
            <div>
              <label>
              <h3 className="ml-20 mr-2 mt-10 font-bold">Will any occupants be allowed to stay on the property?</h3>
                <input className=" ml-20 mr-2 mb-2 font-bold" type="radio" value="yes" checked={allowOccupants} onChange={() => setAllowOccupants(true)} />
                Yes
                <input className=" ml-10 mr-2 mb-2 font-bold" type="radio" value="no" checked={!allowOccupants} onChange={() => setAllowOccupants(false)} />
                No
              </label>
              {allowOccupants && (
                <div>
                  <button type="button" onClick={handleAddOccupant}>
                    Add Occupant
                  </button>
                  {occupants.map((occupant, index) => (
                    <div key={index}>
                      <legend>Occupant {index + 1}</legend>
                      <div>
                        <label>
                          Name:
                          <input
                            type="text"
                            value={occupant.name}
                            onChange={(event) => {
                              const updatedOccupants = [...occupants];
                              updatedOccupants[index].name = event.target.value;
                              setOccupants(updatedOccupants);
                            }}
                          />
                        </label>
                      </div>
                      <div>
                        <label>
                          Contact phone:
                          <input
                            type="text"
                            value={occupant.phone}
                            onChange={(event) => {
                              const updatedOccupants = [...occupants];
                              updatedOccupants[index].phone = event.target.value;
                              setOccupants(updatedOccupants);
                            }}
                          />
                        </label>
                      </div>
                      <div>
                        <label>
                          Contact email (optional):
                          <input
                            type="text"
                            value={occupant.email}
                            onChange={(event) => {
                              const updatedOccupants = [...occupants];
                              updatedOccupants[index].email = event.target.value;
                              setOccupants(updatedOccupants);
                            }}
                          />
                        </label>
                      </div>
                      <button type="button" onClick={() => handleRemoveOccupant(index)}>
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </fieldset>
        );
      case 4:
        return (
          //4.0 Term section
          <fieldset>
            <legend className="mx-20 font-bold text-2xl">4.0 Terms</legend>
            <div className="flex items-center">
              <label className="flex items-center">
              <h3 className="ml-20 mr-2 mt-3 font-bold">Rent Payment Frequency:</h3>
                <select
                  value={rentPaymentFrequency}
                  className="border-2 mt-3 border-gray-800 rounded py-1"
                  onChange={(event) => setRentPaymentFrequency(event.target.value)}
                >
                  <option value="monthly">Monthly</option>
                  <option value="annually">Annually</option>
                </select>
              </label>
            </div>


            <div className="flex items-center">
              <label className="flex items-center">
              <h3 className="ml-20 mr-2 mt-3 font-bold">Rent Amount:</h3>
                <input
                  type="text" value={rentAmount} onChange={(event) => setRentAmount(event.target.value)} 
                  className="border border-gray-700 rounded px-3 py-1 mt-3"/>
              </label>
            </div>
            {rentPaymentFrequency === 'monthly' && (
              <div className="flex items-center">
                <label className="flex items-center">
                <h3 className="ml-20 mr-2 mt-3 font-bold">Rent Payment Date:</h3>
                  <input
                    type="date"
                    value={rentPaymentDate}
                    onChange={(event) => setRentPaymentDate(event.target.value)} className="rounded-full border-gray-300 mt-3 bg-gray-100 pl-4 pr-4 py-2"
                  />
                </label>
              </div>
            )}


            <div>
              <label>
              <h3 className="ml-20 mr-2 mt-3 font-bold">Does the tenant need to pay utilities by themselves?</h3>
                <input className=" ml-20 mr-2 mb-2 font-bold" type="radio" value="yes" checked={payUtilities} onChange={() => setPayUtilities(true)} />
                Yes
                <input className=" ml-10 mr-2 mb-2 font-bold" type="radio" value="no" checked={!payUtilities} onChange={() => setPayUtilities(false)}
                />
                No
              </label>
            </div>


            <div>
              <label>
              <h3 className="ml-20 mr-2 mt-3 font-bold">Are pets allowed?</h3>

                <input className=" ml-20 mr-2 mb-2 font-bold" type="radio" value="yes" checked={allowPets} onChange={() => setAllowPets(true)}
                />
                Yes
                <input className=" ml-10 mr-2 mb-2 font-bold" type="radio" value="no" checked={!allowPets} onChange={() => setAllowPets(false)} />
                No
              </label>
            </div>


            <div>
              <label>
              <h3 className="ml-20 mr-2 mt-3 font-bold">Is smoking permitted indoors?</h3>
                <input className=" ml-20 mr-2 mb-2 font-bold" type="radio" value="yes" checked={allowSmoking} onChange={() => setAllowSmoking(true)} />
                Yes
                <input className=" ml-10 mr-2 mb-2 font-bold" type="radio" value="no" checked={!allowSmoking} onChange={() => setAllowSmoking(false)} />
                No
              </label>
            </div>


            <div>
              <label>
              <h3 className="ml-20 mr-2 mt-3 font-bold">Will the tenant be responsible for any maintenance?</h3>
                
                <input className=" ml-20 mr-2 mb-2 font-bold" type="radio" value="yes" checked={responsibilityForMaintenance} onChange={() => setResponsibilityForMaintenance(true)} />
                Yes
                <input className=" ml-10 mr-2 mb-2 font-bold" type="radio" value="no" checked={!responsibilityForMaintenance} onChange={() => setResponsibilityForMaintenance(false)} />
                No
              </label>
            </div>


            <div>
              <label>
              <h3 className="ml-20 mr-2 mt-3 font-bold">Are home businesses allowed?</h3>
                <input className=" ml-20 mr-2 mb-2 font-bold" type="radio" value="yes" checked={allowHomeBusiness} onChange={() => setAllowHomeBusiness(true)} />
                Yes
                <input className=" ml-10 mr-2 mb-2 font-bold" type="radio" value="no" checked={!allowHomeBusiness} onChange={() => setAllowHomeBusiness(false)} />
                No
              </label>
            </div>
          </fieldset>
        )
      default:
        return null;
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {renderFormFields()}

      {/* Pagination buttons */}
      <div className="flex mt-5 justify-between">
        {currentPage >= 1 && (
          <div className="flex ml-5">
            <button type="button" onClick={handlePrevious} disabled={currentPage === 1} className={`bg-amber-900 hover:bg-yellow-800 text-white py-2 border-l border-gray-200  hover:text-white rounded-l-md border-r px-3 ${currentPage === 1 ? 'hidden' : ''}`}>
              <div className="flex flex-row align-middle">
                <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                </svg>
                <p className="ml-2">Prev</p>
              </div>
            </button>
          </div>
        )}
        {currentPage < totalPages ? (
          <div className="flex mr-5">
            <button type="button" onClick={handleNext} class="bg-amber-900 hover:bg-yellow-800 text-white rounded-r-md py-2 border-l border-gray-200  hover:text-white px-3">
              <div className="flex flex-row align-middle">
                <span className="mr-2">Next</span>
                <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </button>
          </div>
        ) : (
          <button type="submit" className="bg-green-800 hover:bg-green-500 mr-5  text-white rounded-md py-2 border-l border-gray-200  hover:text-white px-3">Submit</button>
        )}
      </div>
    </form>
  );
}

export default TemplateForm;