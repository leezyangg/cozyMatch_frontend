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
            <legend>1.0 General</legend>
            <div>
              <label>
                <input type="radio" value="house" checked={propertyType === 'house'} onChange={() => setPropertyType('house')} />
                House
              </label>
              <label>
                <input type="radio" value="apartment" checked={propertyType === 'apartment'} onChange={() => setPropertyType('apartment')} />
                Apartment
              </label>
              <label>
                <input type="radio" value="condo" checked={propertyType === 'condo'} onChange={() => setPropertyType('condo')} />
                Condo
              </label>
              <label>
                <input type="radio" value="room" checked={propertyType === 'room'} onChange={() => setPropertyType('room')} />
                Room
              </label>
              <label>
                <input type="radio" value="other" checked={propertyType === 'other'} onChange={() => setPropertyType('other')} />
                Other
              </label>
            </div>
            <div>
              <label>
                Tenancy Start Date:
                <input type="date" value={tenancyStart} onChange={(event) => setTenancyStart(event.target.value)} />
              </label>
            </div>
            <div>
              <label htmlFor="tenancy-end-date">Tenancy End Date:</label>
              <input type="date" name="tenancy-end-date" value={tenancyEndDate} onChange={(e) => setTenancyEndDate(e.target.value)} />
            </div>
          </fieldset>
        );
      case 2:
        return (
          //Property section 
          <fieldset>
            <legend>2.0 Property</legend>
            <div>
              <label>
                Property address:
                <input type="text" value={propertyAddress} onChange={(event) => setPropertyAddress(event.target.value)} />
              </label>
            </div>
            <div>
              <label>
                Will tenant have access to parking?
                <input type="radio" value="yes" checked={hasParking} onChange={() => setHasParking(true)} />
                Yes
                <input type="radio" value="no" checked={!hasParking} onChange={() => setHasParking(false)} />
                No
              </label>
            </div>
            <div>
              <label>
                Does the property include any furnishing?
                <input type="radio" value="yes" checked={hasFurnishing} onChange={() => setHasFurnishing(true)} />
                Yes
                <input type="radio" value="no" checked={!hasFurnishing} onChange={() => setHasFurnishing(false)} />
                No
              </label>
            </div>
          </fieldset>
        );
      case 3:
        return (
          //Parties section
          <fieldset>
            <legend>3.0 Parties</legend>
            <div>
              <legend>Landlord Details</legend>
              <div>
                <label>
                  <input type="radio" value="individual" checked={landlordType === 'individual'} onChange={() => setLandlordType('individual')} />
                  Individual
                </label>
                <label>
                  <input type="radio" value="company" checked={landlordType === 'company'} onChange={() => setLandlordType('company')} />
                  Company/Organization
                </label>
              </div>
              <div>
                <label>
                  Name:
                  <input type="text" value={landlordName} onChange={(event) => setLandlordName(event.target.value)} />
                </label>
              </div>
              <div>
                <label>
                  Address:
                  <input type="text" value={landlordAddress} onChange={(event) => setLandlordAddress(event.target.value)} />
                </label>
              </div>
              <div>
                <label>
                  Contact phone:
                  <input type="text" value={landlordPhone} onChange={(event) => setLandlordPhone(event.target.value)} />
                </label>
              </div>
              <div>
                <label>
                  Contact email (optional):
                  <input type="text" value={landlordEmail} onChange={(event) => setLandlordEmail(event.target.value)} />
                </label>
              </div>
            </div>
            <div>
              <legend>Tenant Details</legend>
              <div>
                <label>
                  Name:
                  <input type="text" value={tenantName} onChange={(event) => setTenantName(event.target.value)} />
                </label>
              </div>
              <div>
                <label>
                  Contact phone:
                  <input type="text" value={tenantPhone} onChange={(event) => setTenantPhone(event.target.value)} />
                </label>
              </div>
              <div>
                <label>
                  Contact email (optional):
                  <input type="text" value={tenantEmail} onChange={(event) => setTenantEmail(event.target.value)} />
                </label>
              </div>
              {otherTenants.map((otherTenant, index) => (
                <div key={index

                }>
                  <legend>Other Tenant {index + 1}</legend>
                  <div>
                    <label>
                      Name:
                      <input
                        type="text"
                        value={otherTenant.name}
                        onChange={(event) => {
                          const updatedTenants = [...otherTenants];
                          updatedTenants[index].name = event.target.value;
                          setOtherTenants(updatedTenants);
                        }}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Contact phone:
                      <input
                        type="text"
                        value={otherTenant.phone}
                        onChange={(event) => {
                          const updatedTenants = [...otherTenants];
                          updatedTenants[index].phone = event.target.value;
                          setOtherTenants(updatedTenants);
                        }}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Contact email (optional):
                      <input
                        type="text"
                        value={otherTenant.email}
                        onChange={(event) => {
                          const updatedTenants = [...otherTenants];
                          updatedTenants[index].email = event.target.value;
                          setOtherTenants(updatedTenants);
                        }}
                      />
                    </label>
                  </div>
                  <button type="button" onClick={() => handleRemoveTenant(index)}>
                    Remove
                  </button>
                </div>
              ))}
              <button type="button" onClick={handleAddTenant}>
                Add Another Tenant
              </button>
            </div>
            <div>
              <label>
                Will any occupants be allowed to stay on the property?
                <input type="radio" value="yes" checked={allowOccupants} onChange={() => setAllowOccupants(true)} />
                Yes
                <input type="radio" value="no" checked={!allowOccupants} onChange={() => setAllowOccupants(false)} />
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
            <legend>4.0 Terms</legend>
            <div>
              <label>
                Rent Payment Frequency:
                <select
                  value={rentPaymentFrequency}
                  onChange={(event) => setRentPaymentFrequency(event.target.value)}
                >
                  <option value="monthly">Monthly</option>
                  <option value="annually">Annually</option>
                </select>
              </label>
            </div>


            <div>
              <label>
                Rent Amount:
                <input
                  type="text" value={rentAmount} onChange={(event) => setRentAmount(event.target.value)} />
              </label>
            </div>
            {rentPaymentFrequency === 'monthly' && (
              <div>
                <label>
                  Rent Payment Date:
                  <input
                    type="date"
                    value={rentPaymentDate}
                    onChange={(event) => setRentPaymentDate(event.target.value)}
                  />
                </label>
              </div>
            )}


            <div>
              <label>
                Does the tenant need to pay utilities by themselves?
                <input type="radio" value="yes" checked={payUtilities} onChange={() => setPayUtilities(true)} />
                Yes
                <input type="radio" value="no" checked={!payUtilities} onChange={() => setPayUtilities(false)}
                />
                No
              </label>
            </div>


            <div>
              <label>
                Are pets allowed?
                <input type="radio" value="yes" checked={allowPets} onChange={() => setAllowPets(true)}
                />
                Yes
                <input type="radio" value="no" checked={!allowPets} onChange={() => setAllowPets(false)} />
                No
              </label>
            </div>


            <div>
              <label>
                Is smoking permitted indoors?
                <input type="radio" value="yes" checked={allowSmoking} onChange={() => setAllowSmoking(true)} />
                Yes
                <input type="radio" value="no" checked={!allowSmoking} onChange={() => setAllowSmoking(false)} />
                No
              </label>
            </div>


            <div>
              <label>
                Will the tenant be responsible for any maintenance?
                <input type="radio" value="yes" checked={responsibilityForMaintenance} onChange={() => setResponsibilityForMaintenance(true)} />
                Yes
                <input type="radio" value="no" checked={!responsibilityForMaintenance} onChange={() => setResponsibilityForMaintenance(false)} />
                No
              </label>
            </div>


            <div>
              <label>
                Are home businesses allowed?
                <input type="radio" value="yes" checked={allowHomeBusiness} onChange={() => setAllowHomeBusiness(true)} />
                Yes
                <input type="radio" value="no" checked={!allowHomeBusiness} onChange={() => setAllowHomeBusiness(false)} />
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
      <div>
        {currentPage > 1 && (
          <button type="button" onClick={handlePrevious}>
            Previous
          </button>
        )}
        {currentPage < totalPages ? (
          <button type="button" onClick={handleNext}>
            Next
          </button>
        ) : (
          <button type="submit">Submit</button>
        )}
      </div>
    </form>
  );
}

export default TemplateForm;