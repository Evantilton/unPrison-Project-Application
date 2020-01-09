import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
class Programs extends Component {

    handleInputChange = (event) => {
        this.props.dispatch({ type: 'SET_EXISTING_PROGRAMS', payload: { value: event.target.value, property: event.target.name } })
    }
    
    render() {
        return (
            <div>
                <ul class="nobullet">
                    <h1>Children's Books Program (prison only) </h1>

                    <li >
                        <label>Participating:</label>
                        <select name='books_participating' value={this.props.reduxState.eventsProgramsReducer.books_participating} onChange={(event) => this.handleInputChange(event)}>
                            <option value="false">no</option>
                            <option value="true">yes</option>
                        </select>
                    </li>
                    <li >
                        <label>Average Age Range of Children: </label>
                        <input type="number" name='average_age_range' value={this.props.reduxState.eventsProgramsReducer.average_age_range} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>


                    <li >
                        <label>Inmate Child Form Sent: </label>
                        <select name='child_form_sent' value={this.props.reduxState.eventsProgramsReducer.child_form_sent} onChange={(event) => this.handleInputChange(event)}>
                            <option value="false">no</option>
                            <option value="true">yes</option>
                        </select>
                    </li>
                    
                    <li >
                        <label>Date Emailed: </label>
                        <input type="date" name='child_form_date_emailed' value={moment(this.props.reduxState.eventsProgramsReducer.child_form_date_emailed).format('YYYY-MM-DD')} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>

                    <li>
                        <label>Date Returned: </label>
                        <input type="date" name='child_form_date_returned' value={moment(this.props.reduxState.eventsProgramsReducer.child_form_date_returned).format('YYYY-MM-DD')} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>


                    <li>
                        <label>Total Mothers Participating: </label>
                        <input type="number" name='total_mothers_participating' value={this.props.reduxState.eventsProgramsReducer.total_mothers_participating} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>


                    <li>
                        <label>Total Children Participating: </label>
                        <input type="number" name='total_children_participating' value={this.props.reduxState.eventsProgramsReducer.total_children_participating} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>


                    <li >
                        <label>Total Books Needed: </label>
                        <input type="number" name='total_books_needed' value={this.props.reduxState.eventsProgramsReducer.total_books_needed} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>


                    <li >
                        <label>Books Carry-on </label>
                        <select name='books_carryon' value={this.props.reduxState.eventsProgramsReducer.books_carryon} onChange={(event) => this.handleInputChange(event)}>
                            <option value="false">no</option>
                            <option value="true">yes</option>
                        </select>
                    </li>
                    <li >
                        <label>Books Shipped: </label>
                        <input type="date" name='books_shipped' value={moment(this.props.reduxState.eventsProgramsReducer.books_shipped).format('YYYY-MM-DD')} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>Program Completed:  </label>
                        <input type="date" name='program_completed' value={moment(this.props.reduxState.eventsProgramsReducer.program_completed).format('YYYY-MM-DD')} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>Prison Baby Donation:   </label>
                        <input type="text" name='prison_prison_baby_donation' value={this.props.reduxState.eventsProgramsReducer.prison_prison_baby_donation} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <h1>Reading Glasses Program (prisons only)</h1>
                    <li >
                        <label>Participating:  </label>
                        <select name='glasses_participating' value={this.props.reduxState.eventsProgramsReducer.glasses_participating} onChange={(event) => this.handleInputChange(event)}>
                            <option value="false">no</option>
                            <option value="true">yes</option>
                        </select>
                    </li>
                    <li >
                        <label>Estimated Number Participating:  </label>
                        <input type="number" name='est_number_partipating' value={this.props.reduxState.eventsProgramsReducer.est_number_partipating} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>Estimated Population Over Forty:  </label>
                        <input type="number" name='est_population_over_forty' value={this.props.reduxState.eventsProgramsReducer.est_population_over_forty} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>Number of Glasses Donated:   </label>
                        <input type="number" name='number_glasses_donated' value={this.props.reduxState.eventsProgramsReducer.number_glasses_donated} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>Number of Glasses Shipped:  </label>
                        <input type="number" name='number_glasses_shipped' value={this.props.reduxState.eventsProgramsReducer.number_glasses_shipped} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>Number of Glasses Delivered:   </label>
                        <input type="number" name='number_glasses_delivered' value={this.props.reduxState.eventsProgramsReducer.number_glasses_delivered} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>Date Glasses Shipped:    </label>
                        <input type="date" name='date_glasses_shipped' value={moment(this.props.reduxState.eventsProgramsReducer.date_glasses_shipped).format('YYYY-MM-DD')} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>Date Glasses Delivered:   </label>
                        <input type="date" name='date_glasses_delivered' value={moment(this.props.reduxState.eventsProgramsReducer.date_glasses_delivered).format('YYYY-MM-DD')} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>Received Form:   </label>
                        <select name='received_form' value={this.props.reduxState.eventsProgramsReducer.received_form} onChange={(event) => this.handleInputChange(event)}>
                            <option value="false">no</option>
                            <option value="true">yes</option>
                        </select>
                    </li>
                    <li>Glasses Sizes</li>
                    <li >
                        <label>1.50  </label>
                        <input type="number" name='glasses_one_half' value={this.props.reduxState.eventsProgramsReducer.glasses_one_half} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>2.00  </label>
                        <input type="number" name='glasses_two' value={this.props.reduxState.eventsProgramsReducer.glasses_two} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>2.50  </label>
                        <input type="number" name='glasses_two_half' value={this.props.reduxState.eventsProgramsReducer.glasses_two_half} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>3.00  </label>
                        <input type="number" name='glasses_three' value={this.props.reduxState.eventsProgramsReducer.glasses_three} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <h1>Public Event Information (public event only)</h1>
                    <li >
                        <label>Bio Sent: </label>
                        <select name='bio_sent' value={this.props.reduxState.eventsProgramsReducer.bio_sent} onChange={(event) => this.handleInputChange(event)}>
                            <option value="false">no</option>
                            <option value="true">yes</option>
                        </select>
                    </li>
                    <li >
                        <label>Date Emailed:</label>
                        <input type="date" name='public_event_date_emailed' value={moment(this.props.reduxState.eventsProgramsReducer.public_event_date_emailed).format('YYYY-MM-DD')} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>Public Questionnaire Sent:</label>
                        <select name='public_questionnaire_sent' value={this.props.reduxState.eventsProgramsReducer.public_questionnaire_sent} onChange={(event) => this.handleInputChange(event)}>
                            <option value="false">no</option>
                            <option value="true">yes</option>
                        </select>
                    </li>
                    <li >
                        <label>Date Questionaire Sent:</label>
                        <input type="date" name='date_questionaire_sent' value={moment(this.props.reduxState.eventsProgramsReducer.date_questionaire_sent).format('YYYY-MM-DD')} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>Date Questionaire Returned:</label>
                        <input type="date" name='date_questionaire_returned' value={moment(this.props.reduxState.eventsProgramsReducer.date_questionaire_returned).format('YYYY-MM-DD')} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>Other Information:</label>
                        <input type="text" name='other_information' value={this.props.reduxState.eventsProgramsReducer.other_information} onChange={(event) => this.handleInputChange(event)}></input>

                    </li>
                    <li >
                        <label>Book Signing:</label>
                        <select name='book_signing' value={this.props.reduxState.eventsProgramsReducer.book_signing} onChange={(event) => this.handleInputChange(event)}>
                            <option value="false">no</option>
                            <option value="true">yes</option>
                        </select>
                    </li>
                    <li >
                        <label>Book Sales: </label>
                        <select name='book_sales' value={this.props.reduxState.eventsProgramsReducer.book_sales} onChange={(event) => this.handleInputChange(event)}>
                            <option value="false">no</option>
                            <option value="true">yes</option>
                        </select>
                    </li>
                    <li >
                        <label>Total Prison Baby Memoir Needed:</label>
                        <input type="number" name='total_prison_baby_needed' value={this.props.reduxState.eventsProgramsReducer.total_prison_baby_needed} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>Who orders Books</label>
                        <input type="text" name='who_orders_books' value={this.props.reduxState.eventsProgramsReducer.who_orders_books} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>Books Carry-On</label>
                        <select name='books_carryon' value={this.props.reduxState.eventsProgramsReducer.books_carryon} onChange={(event) => this.handleInputChange(event)}>
                            <option value="false">no</option>
                            <option value="true">yes</option>
                        </select>
                    </li >
                    <li >
                        <label>Books Shipped:</label>
                        <input type="date" name='books_shipped' value={moment(this.props.reduxState.eventsProgramsReducer.books_shipped).format('YYYY-MM-DD')} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                </ul >
            </div >
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Programs);
