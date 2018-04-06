import React from 'react';
import './workflow.css'

const Workflow = () => {
    return(
        <div>
            <img src="chart.jpg" alt='chart'/>

            <form class="message-form">
                <p class="h4 text-center mb-4">Write to us</p>

                <label for="defaultFormContactNameEx" class="grey-text">Your name</label>
                <input type="text" id="defaultFormContactNameEx" class="form-control" />
                
                <br />

                <label for="defaultFormContactEmailEx" class="grey-text">Your email</label>
                <input type="email" id="defaultFormContactEmailEx" class="form-control" />

                <br />

                <label for="defaultFormContactSubjectEx" class="grey-text">Subject</label>
                <input type="text" id="defaultFormContactSubjectEx" class="form-control" />

                <br />
                
                <label for="defaultFormContactMessageEx" class="grey-text">Your message</label>
                <textarea type="text" id="defaultFormContactMessageEx" class="form-control" rows="3"></textarea>

                <div class="text-center mt-4">
                    <button class="btn btn-outline-warning" type="submit">Send<i class="fa fa-paper-plane-o ml-2"></i></button>
                </div>
            </form>
                      
        </div>
    );
};

export default Workflow;
