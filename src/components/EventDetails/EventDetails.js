import React, { Component } from 'react';
import Financials from './Finanacials/Financials';
import General from './General/General';
import Programs from './Programs/Programs';
import Travel from './Travel/Travel';
import './EventDetails.css';

class EventDetails extends Component {

    state = {
        general: true,
        financials: false,
        programs: false,
        travel: false,

        generalStyle: {
            backgroundColor: 'antiquewhite',
        },
        financialsStyle: {
            backgroundColor: 'gray',
        },
        programsStyle: {
            backgroundColor: 'gray',
        },
        travelStyle: {
            backgroundColor: 'gray',
        },
    }

    // Conditionally renders VenueGeneral component in tabWindow
    // Sets background color of general tab to white and events tab to gray
    handleGeneralTabClick = () => {
        this.setState({
            general: true,
            travel: false,
            financials: false,
            programs: false,

            generalStyle: {
                backgroundColor: 'antiquewhite',
            },
            travelStyle: {
                backgroundColor: 'gray',
            },
            financialsStyle: {
                backgroundColor: 'gray',
            },
            programsStyle: {
                backgroundColor: 'gray',
            },
        });
    } // End handleGeneralTabClick

    // Conditionally renders VenueEvents component in tabWindow
    // Sets background color of events tab to white and general tab to gray
    handleTravelTabClick = () => {
        this.setState({
            general: false,
            travel: true,
            financials: false,
            programs: false,

            generalStyle: {
                backgroundColor: 'gray',
            },
            travelStyle: {
                backgroundColor: 'antiquewhite',
            },
            financialsStyle: {
                backgroundColor: 'gray',
            },
            programsStyle: {
                backgroundColor: 'gray',
            },
        });
    } // End handleEventsTabClick

    handleFinancialsTabClick = () => {
        this.setState({
            general: false,
            travel: false,
            financials: true,
            programs: false,

            generalStyle: {
                backgroundColor: 'gray',
            },
            travelStyle: {
                backgroundColor: 'gray',
            },
            financialsStyle: {
                backgroundColor: 'antiquewhite',
            },
            programsStyle: {
                backgroundColor: 'gray',
            },
        });
    }

    handleProgramsTabClick = () => {
        this.setState({
            general: false,
            travel: false,
            financials: false,
            programs: true,

            generalStyle: {
                backgroundColor: 'gray',
            },
            travelStyle: {
                backgroundColor: 'gray',
            },
            financialsStyle: {
                backgroundColor: 'gray',
            },
            programsStyle: {
                backgroundColor: 'antiquewhite',
            },
        });
    }

    render() {
        return (
            <>
                <div className="header">
                    <h1>Event Details Component</h1>
                </div>
                <div className="mainWindow">
                    <div className="mainInfo">
                        <h3>Area for event info</h3>
                    </div>
                    <div className="generalTab" onClick={this.handleGeneralTabClick} style={this.state.generalStyle}>
                        General
                    </div>
                    <div className="travelTab" onClick={this.handleTravelTabClick} style={this.state.travelStyle}>
                        Travel
                    </div>
                    <div className="financialsTab" onClick={this.handleFinancialsTabClick} style={this.state.financialsStyle}>
                        Finanacials
                    </div>
                    <div className="programsTab" onClick={this.handleProgramsTabClick} style={this.state.programsStyle}>
                        Programs
                    </div>
                    {this.state.general &&
                        <div className="tabWindow">
                            <General />
                        </div>
                    }
                    {this.state.financials &&
                        <div className="tabWindow">
                            <Financials />
                        </div>
                    }
                    {this.state.programs &&
                        <div className="tabWindow">
                            <Programs />
                        </div>
                    }
                    {this.state.travel &&
                        <div className="tabWindow">
                            <Travel />
                        </div>
                    }
                </div>
            </>
        )
    }
} // End VenueDetails component

export default EventDetails;