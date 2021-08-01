// import react
import React from 'react';

function ActivityForm() {
    return (
        <section>
            <h1>Enter Activity Info</h1>

            <form id="activity-form">
                {/* activity name input */}
                {/* can we hide the label when it comes to form output? */}
                <span>
                    <label for="activity-name">Activity Name</label>
                    <input type="text" placeholder="Activity Name" name="activity-name" id="name" class="form-input" />
                </span>

                {/* description textarea */}\
                <span>
                    <label for="description">Description:</label>
                    <textarea placeholder="Description" name="description" id="description" class="form-input" />
                </span>

                {/* mess index 1-5 rating scale */}
                <span>
                    <label for="mess-index">Mess Index:</label>
                    <input type="" placeholder="" name="" id="" class="form-input" />
                </span>

                {/* safety index 1-5 rating scale */}

                {/* set up time dropdown with min ranges */}

                {/* tear down time dropdown with min ranges*/}

                {/* tools/materials needed checklist */}

                {/* prompts maybe like add an extra field? */}

                {/* learning objectives maybe like add an extra field? */}

                {/* upload image - cloudinary? */}

                {/* can we hide the label when it comes to form output? */}
                {/* category/hashtag? need data type */}


            </form>
        </section>
    );
}

export default ActivityForm;