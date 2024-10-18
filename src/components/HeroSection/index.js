'use client'
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './index.module.scss';

function InputField(props){
  return (
    <div className={cn(styles.inputField, props.className)}>
      <p className={styles.inputLabel}>{props.label}</p>
      <input
        type="text"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className={styles.inputBox}
      />
    </div>
  );
}

InputField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};



// First Form
function QuoteForm1({ onNext, formData, handleChange }) {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!formData.movingFrom || !formData.movingto) {
      setError("Please fill out all fields.");
    } else {
      setError("");
      onNext();
    }
  };

  return (
    <div className={styles.quoteForm}>
      <div className={styles.formTitleWrapper}>
        <p className={styles.formHeading}>Are You Moving?</p>
      </div>
      <p className={styles.formSubtitle}>Get Your Free Moving Estimate Now</p>

      <InputField
            label="Moving From" 
            name="movingFrom"
            value={formData.movingFrom}
            onChange={handleChange}
            placeholder="Address/ZipCode" />

      <InputField
            label="Moving To" 
            name="movingto"
            value={formData.movingto}
            onChange={handleChange}
            placeholder="Address/ZipCode"/>

      {error && <p className={styles.errorMsg}>{error}</p>}

      <button className={styles.nextBtn} onClick={handleNext}>Next</button>
    </div>
  );
}

QuoteForm1.propTypes = {
  onNext: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

// Second Form
function QuoteForm2({ onNext, onBack, formData, handleChange }) {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!formData.name || !formData.phone || !formData.email) {
      setError("Please fill out all fields.");
    } else {
      setError("");
      onNext();
    }
  };


  return (
    <div className={styles.quoteForm}>
      <div className={styles.formTitleWrapper}>
        <p className={styles.formHeading}>Tell Us About Yourself</p>
      </div>

      <InputField
            label="Name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"/>

      <InputField
            label="Phone Number" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number" />

      <InputField
            label="Email Address" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address" />

      {error && <p className={styles.errorMsg}>{error}</p>}
      
      <div className={styles.buttons}>
        <button className={styles.backBtn} onClick={onBack}>Back</button>
        <button className={styles.nextBtn} onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

QuoteForm2.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

function PreviewImage(props){
  return (
    <div className={styles.preview}>
      <img 
        key={props.index} 
        src={URL.createObjectURL(props.image)} 
        alt={`Preview ${props.index}`} 
        className={styles.previewImage}
      />
      <p className={styles.fileName}>{props.fileName}</p>
      <button className={styles.removeImage} onClick={props.onRemove}>Remove</button> {/* Call the passed onRemove function */}
    </div>
  );
}

PreviewImage.propTypes = {
  image: PropTypes.object.isRequired,
  fileName: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired, // Add onRemove prop
};



// Third Form
function QuoteForm3({ formData, onBack, handleChange, handleImageUpload, onSubmit, onRemove }) {
  return (
    <div className={styles.quoteForm}>
      <div className={styles.formTitleWrapper}>
        <p className={styles.formHeading}>Additional Information (Optional)</p>
      </div>
      <p className={styles.formSubtitle}>Provide Us With Additional Information such as regarding the size of your move, etc, and/or upload pictures of your apartment/office</p>

      {/* Textarea for additional information */}
      <div className={styles.inputField}>
        <p className={styles.inputLabel}>Additional Info</p>
        <textarea
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
          placeholder="Additional Information"
          className={styles.inputBox}
          rows="4"
        />
      </div>

      {/* File input for uploading images */}
      <div className={styles.inputField}>
        <p className={styles.inputLabel}>Upload Images</p>
        <input
          type="file"
          name="images"
          accept="image/*" // Accept only image files
          multiple // Allow multiple files
          onChange={handleImageUpload} // Function to handle image uploads
          className={styles.inputFile}
        />

        {formData.images.length > 0 && (
          
          <div className={styles.imagePreviewContainer}>
            {formData.images.map((image, index) => (
              <PreviewImage
                key={index}  // Add key prop here
                image={image}
                fileName={image.name}
                onRemove={() => onRemove(index)} // Function to remove an image
              /> 
            ))}
          </div>
        )}
      </div>

      <div className={styles.buttons}>
        <button className={styles.backBtn} onClick={onBack}>Back</button>
        <button className={styles.submitBtn} onClick={onSubmit}>Submit</button> {/* Submit Button */}
      </div>
    </div>
  );
}

QuoteForm3.propTypes = {
  onBack: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleImageUpload: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,  
};

function ThankYou() {
  return (
    <div className={styles.quoteForm}>
      <div className={styles.formTitleWrapper}>
        <p className={styles.formHeading}>Thank You</p>
      </div>
      <p className={styles.formSubtitle}>We will get back to you soon</p>
    </div>
  );
}



// Main HeroSection with Form Navigation
function HeroSection(props) {
  const [formStep, setFormStep] = useState(1); // Track current form step
  const [formData, setFormData] = useState({
    movingFrom: '',
    movingTo: '',
    name: '',
    phone: '',
    email: '',
    additionalInfo: '',
    images: [], // New field to store selected images
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  // Function to handle image uploads
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to an array
    setFormData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ...files], // Append the new files to the existing array
    }));
    console.log('Image Uploaded', formData.images);
  };

  const handleRemoveImage = (indexToRemove) => {
    setFormData((prevData) => ({
      ...prevData,
      images: prevData.images.filter((_, index) => index !== indexToRemove), // Filter out the image to remove
    }));
    console.log('Image Removed', formData.images);
  };

  // Function to move to the next form
  const handleNext = () => {
    setFormStep((prevStep) => Math.min(prevStep + 1, 4)); // Go to next form, max is 3
  };

  // Function to move to the previous form
  const handleBack = () => {
    setFormStep((prevStep) => Math.max(prevStep - 1, 1)); // Go to previous form, min is 1
  };

  const handleSubmit = async () => {
    const formDataToSubmit = new FormData();
    console.log('Initial Form Data:', formData);
    // Append form data
    formDataToSubmit.append('movingFrom', formData.movingFrom);
    formDataToSubmit.append('movingTo', formData.movingTo);
    formDataToSubmit.append('name', formData.name);
    formDataToSubmit.append('phone', formData.phone);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('additionalInfo', formData.additionalInfo);

    // Append images to the form data
    formData.images.forEach((image) => {
      formDataToSubmit.append('images', image); // Use 'images' without []
    });

    console.log('Final Form Data:', formDataToSubmit);

    try {
      const response = await axios.post('http://localhost:5000/submit-quote', formDataToSubmit, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Form Submitted:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    handleNext();
  };

  // Render the correct form based on the current form step
  // Render the correct form based on the current form step
  const renderForm = () => {
      switch (formStep) {
        case 1:
          return <QuoteForm1 formData={formData} handleChange={handleChange} onNext={handleNext} />;
        case 2:
          return <QuoteForm2 formData={formData} handleChange={handleChange} onNext={handleNext} onBack={handleBack} />;
        case 3:
          return (
            <QuoteForm3
              formData={formData}
              handleChange={handleChange}
              handleImageUpload={handleImageUpload} // Pass the image upload handler
              onBack={handleBack}
              onSubmit={handleSubmit} // Pass the submit handler
              onRemove={handleRemoveImage} 
            />
          );
        case 4:
          return <ThankYou />; // Render Thank You page when the form is submitted successfully
        case 5:
        default:
          return null;
      }
  };

  return (
    <section className={cn(styles.movingServicesSection, props.className, 'hero-section')} 
    style={{ '--src': `url(/assets/bg-home-hero.jpg)` }}>
      {/* Main section for moving services information and quote request */}
      <div className={styles.contentContainer}>
        <div className={styles.serviceDescription}>
          <div className={styles.titleWrapper}>
            <p className={styles.mainHeading}>Reliable Moving Services, Tailored for You</p>
          </div>

          <div className={styles.descriptionWrapper}>
            <p
              className={
                styles.serviceDetails
              }>{`Whether you're moving across town or across the country, our expert team ensures a seamless, stress-free experience. We handle your belongings with care, so you can focus on settling into your new home. Get a free quote today and make your move with confidence.`}</p>
          </div>
        </div>

        {/* Render the current form */}
        {renderForm()}
      </div>
    </section>
  );
}

HeroSection.propTypes = {
  className: PropTypes.string,
};

export default HeroSection;
