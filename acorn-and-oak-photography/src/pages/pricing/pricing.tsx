import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import React, { ChangeEvent } from 'react';
import './pricing.css';
import './pricing-constants';
import { PricingConstants } from './pricing-constants';
import { EventInfo } from './event-info.model';

function Pricing() {
  const [eventType, setEventType] = React.useState<string>("wedding");
  const [eventState, setEventState] = React.useState<string>("");
  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [eventDate, setEventDate] = React.useState<string>();
  const [eventDescrip, setEventDescrip] = React.useState<string>("");
  const [eventAddress, setEventAddress] = React.useState<string>("");
  const [eventZip, setEventZip] = React.useState<string>("");
  const [eventCity, setEventCity] = React.useState<string>("");

  const nodeRef = React.useRef(null);

  const eventTypeChange = (event: ChangeEvent<any>) => {
    setEventType(event.target.value);
  };

  const eventStateChange = (event: ChangeEvent<any>) => {
    setEventState(event.target.value);
  };

  const eventZipChange = (event: ChangeEvent<any>) => {
    var cleansedZip = event.target.value;
    if (cleansedZip) {
      cleansedZip = cleansedZip.replace(/[^0-9]/g, '');
    }
    setEventZip(cleansedZip);
  }

  const submitEventInfo = () => {
    if (eventType && eventState && firstName && lastName && email && eventDate &&
      eventAddress && eventZip && eventCity) {
      const eventInfo: EventInfo = {
        type: eventType === "other" ? eventDescrip : eventType,
        date: new Date(eventDate),
        contactInfo: {
          firstName: firstName,
          lastName: lastName,
          email: email
        },
        address: {
          street: eventAddress,
          city: eventCity,
          zipCode: +eventZip,
          stateCode: eventState
        }
      };
      console.log("Save the following event Info:");
      console.log(eventInfo);
    } else {
      // show validation
    }
  }

  return (
    <form className="pricing-form">
      <div className="pricing-text-container">
        <h2>Pricing</h2>
        <p>Please provide the following information to receive a quote for your event.</p>
      </div>
      <section>
        <h3>Contact Information</h3>
        <div className="pricing-component-column">
          <div className="pricing-component-row">
            <div className="pricing-component-container">
              <TextField required className="ui-control" id="first-name" label="First Name" onChange={e => setFirstName(e.target.value)} />
            </div>
            <div className="component-container">
              <TextField required className="ui-control-md" id="last-name" label="Last Name" onChange={e => setLastName(e.target.value)} />
            </div>
          </div>
          <div className="pricing-component-row">
            <div className="pricing-component-container">
              <TextField required className="ui-control-lg" id="email" label="Email" onChange={e => setEmail(e.target.value)} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3>Event Details</h3>
        <div className="pricing-component-column">
          <div className="pricing-component-row">
            <div className="pricing-component-container">
              <TextField
                required
                className="ui-control-sm"
                id="event-date"
                label="Event Date"
                type="date"
                onChange={e => setEventDate(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }} />
            </div>
            <div ref={nodeRef} className="pricing-component-container">
              <FormControl className="ui-control">
                <InputLabel id="event-type-label">Event Type</InputLabel>
                <Select
                  required
                  labelId="event-type-label"
                  id="event-type"
                  value={eventType}
                  onChange={eventTypeChange}>
                  <MenuItem value="wedding">Wedding</MenuItem>
                  <MenuItem value="engagement">Engagement</MenuItem>
                  <MenuItem value="senior">Senior Portrait</MenuItem>
                  <MenuItem value="family">Family Portrait</MenuItem>
                  <MenuItem value="baby">Baby Portrait</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="pricing-component-container">
              <TextField required className="ui-control" id="event-description" label="Event Description" onChange={e => setEventDescrip(e.target.value)} />
            </div>
          </div>
          <div className="pricing-component-row">
            <div className="pricing-component-container">
              <TextField required className="ui-control-lg" id="event-street" label="Street Address" onChange={e => setEventAddress(e.target.value)} />
            </div>
          </div>
          <div className="pricing-component-row">
            <div className="pricing-component-container">
              <TextField required className="ui-control" id="event-city" label="City" onChange={e => setEventCity(e.target.value)} />
            </div>
            <div className="pricing-component-container">
              <FormControl className="ui-control-xs">
                <InputLabel id="event-state-label">State</InputLabel>
                <Select
                  required
                  labelId="event-state-label"
                  id="event-state"
                  value={eventState}
                  onChange={eventStateChange}>
                  <MenuItem value="">--</MenuItem>
                  {PricingConstants.states.map(s =>
                    <MenuItem key={s} value={s}>{s}</MenuItem>
                  )}
                </Select>
              </FormControl>
            </div>
            <div className="pricing-component-container">
              <TextField required className="ui-control-sm" id="event-zip" label="Zip Code"
                onChange={eventZipChange} value={eventZip} inputProps={{ maxLength: 5 }} />
            </div>
          </div>
        </div>
      </section>
      <div className="pricing-submit-button-container">
        <Button className="primary-button" variant="contained" color="primary" onClick={submitEventInfo}>
          Submit
        </Button>
      </div>
    </form>
  );
}

export default Pricing;
