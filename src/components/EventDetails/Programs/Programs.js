import React, { Component } from 'react';

class Programs extends Component {
    render() {
        return (
            <div>
                <h3>Programs Component</h3>
                <ul class="nobullet">
                <li><button className="tabButtonPosition">Save Changes</button></li>
                    <h1>Children's Books Program (prison only) </h1>
                    
                        <li >
                            <label>Participating:</label>
                            <input type="checkbox"></input>
                        </li>
                        <li >
                            <label>Average Age Range of Children: </label>
                            <input type="number"></input>
                        </li>
                        <li >
                            <label>Inmate Child Form Sent: </label>
                            <input type="checkbox"></input>
                        </li>
                        <li >
                            <label>Date Emailed: </label>
                            <input type="date"></input>
                        </li>
                        <li >
                            <label>Date Returned: </label>
                            <input type="date"></input>
                        </li>
                        <li >
                            <label>Total Mothers Participating: </label>
                            <input type="number"></input>
                        </li>
                        <li >
                            <label>Total Children Participating: </label>
                            <input type="number"></input>
                        </li>
                        <li >
                            <label>Total Books Needed: </label>
                            <input type="number"></input>
                        </li>
                        <li >
                            <label>Books Carry-on </label>
                            <input type="checkbox"></input>
                        </li>
                        <li >
                            <label>Books Shipped: </label>
                            <input type="date"></input>
                        </li>
                        <li >
                            <label>Program Completed:  </label>
                            <input type="date"></input>
                        </li>
                        <li >
                            <label>Prison Baby Donation:   </label>
                            <input type="text"></input>
                        </li>
	
	

                        <h1>Reading Glasses Program (prisons only)</h1>
                        <li >
                            <label>Participating:  </label>
                            <input type="checkbox"></input>
                        </li>
                        <li >
                            <label>Estimated Number Participating:  </label>
                            <input type="number"></input>
                        </li>
                        <li >
                            <label>Estimated Population Over Forty:  </label>
                            <input type="number"></input>
                        </li>
                        <li >
                            <label>Number of Glasses Donated:   </label>
                            <input type="number"></input>
                        </li>
                        <li >
                            <label>Number of Glasses Delivered:   </label>
                            <input type="number"></input>
                        </li>
                        <li >
                            <label>Date Glasses Shipped:    </label>
                            <input type="date"></input>
                        </li>
                        <li >
                            <label>Number of Glasses Delivered:   </label>
                            <input type="number"></input>
                        </li>
                        <li >
                            <label>Date Glasses Shipped:   </label>
                            <input type="date"></input>
                        </li>
                        <li >
                            <label>Date Glasses Delivered:   </label>
                            <input type="date"></input>
                        </li>
                        <li >
                            <label>Received Form:   </label>
                            <input type="checkbox"></input>
                        </li>
                        <li>Glasses Sizes</li>
                        <li >
                            <label>1.50  </label>
                            <input type="number"></input>
                        </li>
                        <li >
                            <label>2.00  </label>
                            <input type="number"></input>
                        </li>
                        <li >
                            <label>2.50  </label>
                            <input type="number"></input>
                        </li>
                        <li >
                            <label>3.00  </label>
                            <input type="number"></input>
                        </li>
	
                        <h1>Public Event Information (public event only)</h1>
                        <li >
                            <label>Bio Sent: </label>
                            <input type="checkbox"></input>
                        </li>
                        <li >
                            <label>Date Emailed:</label>
                            <input type="date"></input>
                        </li>
                        <li >
                            <label>Questionnaire Sent:</label>
                            <input type="date"></input>
                        </li>
                        <li >
                            <label>Questionnaire Returned:</label>
                            <input type="date"></input>
                        </li>
                        <li >
                            <label>Other Information:</label>
                            <input type="text"></input>
                        </li>
                        <li >
                            <label>Book Signing:</label>
                            <input type="checkbox"></input>
                        </li>
                        <li >
                            <label>Book Sales: </label>
                            <input type="checkbox"></input>
                        </li>
                        <li >
                            <label>Total Prison Baby Memoir Needed:</label>
                            <input type="number"></input>
                        </li>
                        <li >
                            <label>Who orders Books</label>
                            <input type="text"></input>
                        </li>
                        <li >
                            <label>Books Carry-On</label>
                            <input type="checkbox"></input>
                        </li>
                        <li >
                            <label>Books Shipped:</label>
                            <input type="date"></input>
                        </li>
                </ul>
            </div>
        )
    }
}

export default Programs;