import React, { useState } from 'react';
import { User, Calendar, Ruler, Weight, Utensils } from 'lucide-react';

const OnboardingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    gender: '',
    height: '',
    weight: '',
    dietaryPreferences: []
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDietaryChange = (preference) => {
    setFormData(prev => ({
      ...prev,
      dietaryPreferences: prev.dietaryPreferences.includes(preference)
        ? prev.dietaryPreferences.filter(p => p !== preference)
        : [...prev.dietaryPreferences, preference]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const calculateAge = (dob) => {
    if (!dob) return '';
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
    }
    return age;
  };

  const dietaryOptions = [
    { id: 'vegetarian', label: 'Vegetarian', emoji: '🥬' },
    { id: 'non-vegetarian', label: 'Non-Vegetarian', emoji: '🍖' },
    { id: 'egg', label: 'Egg', emoji: '🥚' },
    { id: 'fish', label: 'Fish', emoji: '🐟' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Nutri Genie!</h1>
          <p className="text-gray-600">Let's personalize your nutrition journey. This will only take 2-3 minutes.</p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="space-y-8">
            
            {/* Personal Information Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#0F5A5A'}}>
                  <User className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all duration-200"
                  style={{focusRingColor: '#0F5A5A'}}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Date of Birth & Gender */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all duration-200"
                      style={{focusRingColor: '#0F5A5A'}}
                      required
                    />
                    {formData.dateOfBirth && (
                      <div className="text-sm text-gray-500 mt-1">
                        Age: {calculateAge(formData.dateOfBirth)} years
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gender *
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all duration-200"
                    style={{focusRingColor: '#0F5A5A'}}
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Physical Details Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#0F5A5A'}}>
                  <Ruler className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Physical Details</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Height */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Height (cm) *
                  </label>
                  <input
                    type="number"
                    value={formData.height}
                    onChange={(e) => handleInputChange('height', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all duration-200"
                    style={{focusRingColor: '#0F5A5A'}}
                    placeholder="e.g., 170"
                    min="100"
                    max="250"
                    required
                  />
                </div>

                {/* Weight */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Weight (kg) *
                  </label>
                  <input
                    type="number"
                    value={formData.weight}
                    onChange={(e) => handleInputChange('weight', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all duration-200"
                    style={{focusRingColor: '#0F5A5A'}}
                    placeholder="e.g., 65"
                    min="30"
                    max="200"
                    step="0.1"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Dietary Preferences Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#0F5A5A'}}>
                  <Utensils className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Dietary Preferences</h2>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  What do you eat? (Select all that apply) *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {dietaryOptions.map(option => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleDietaryChange(option.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-2 hover:shadow-md ${
                        formData.dietaryPreferences.includes(option.id)
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <span className="text-2xl">{option.emoji}</span>
                      <span className="text-sm font-medium text-center">{option.label}</span>
                    </button>
                  ))}
                </div>
                {formData.dietaryPreferences.length === 0 && (
                  <p className="text-sm text-gray-500 mt-2">Please select at least one dietary preference</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={!formData.name || !formData.dateOfBirth || !formData.gender || !formData.height || !formData.weight || formData.dietaryPreferences.length === 0}
                className="w-full py-4 px-6 rounded-xl text-white font-semibold text-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transform hover:-translate-y-0.5"
                style={{backgroundColor: '#0F5A5A'}}
              >
                Complete Setup & Start Your Journey
              </button>
            </div>

            {/* Progress Indicator */}
            <div className="text-center">
              <p className="text-sm text-gray-500">
                This information helps us create personalized nutrition recommendations just for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingForm;