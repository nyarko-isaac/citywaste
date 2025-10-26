"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AlertCircle, CheckCircle, Clock } from "lucide-react"
import { useState } from "react"

export default function Complaints() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    accountNumber: "",
    complaintType: "",
    date: "",
    description: "",
    attachments: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Complaint submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        accountNumber: "",
        complaintType: "",
        date: "",
        description: "",
        attachments: "",
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">File a Complaint</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              We value your feedback. If you have concerns about our service, please let us know and we'll address them
              promptly.
            </p>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Complaint Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're committed to resolving your concerns quickly and fairly
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: AlertCircle,
                  title: "Submit Your Complaint",
                  description: "Fill out the form with details about your concern. Be as specific as possible.",
                },
                {
                  icon: Clock,
                  title: "We Review & Investigate",
                  description: "Our team will review your complaint within 24 hours and begin investigating.",
                },
                {
                  icon: CheckCircle,
                  title: "Resolution & Follow-up",
                  description: "We'll contact you with our findings and work toward a resolution within 7 days.",
                },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="bg-card rounded-lg p-6 border border-border text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Complaint Form */}
        <section className="py-16 sm:py-24 bg-card">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-background rounded-lg p-8 sm:p-12 border border-border">
              <h2 className="text-3xl font-bold text-foreground mb-2">Submit a Complaint</h2>
              <p className="text-muted-foreground mb-8">
                Please provide as much detail as possible to help us understand and resolve your concern.
              </p>

              {submitted && (
                <div className="mb-6 p-4 bg-primary/10 border border-primary rounded-lg">
                  <p className="text-primary font-semibold">
                    Thank you! Your complaint has been received. We'll contact you within 24 hours.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="accountNumber" className="block text-sm font-semibold text-foreground mb-2">
                      Account Number
                    </label>
                    <input
                      type="text"
                      id="accountNumber"
                      name="accountNumber"
                      value={formData.accountNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="EW-12345"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="complaintType" className="block text-sm font-semibold text-foreground mb-2">
                      Type of Complaint
                    </label>
                    <select
                      id="complaintType"
                      name="complaintType"
                      value={formData.complaintType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select complaint type</option>
                      <option value="service-quality">Service Quality</option>
                      <option value="billing">Billing Issue</option>
                      <option value="missed-pickup">Missed Pickup</option>
                      <option value="damage">Property Damage</option>
                      <option value="staff-conduct">Staff Conduct</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-semibold text-foreground mb-2">
                      Date of Incident
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-semibold text-foreground mb-2">
                    Detailed Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Please describe the issue in detail..."
                  />
                </div>

                <div>
                  <label htmlFor="attachments" className="block text-sm font-semibold text-foreground mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="attachments"
                    name="attachments"
                    value={formData.attachments}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Any additional details or references..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-secondary text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Submit Complaint
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {[
                {
                  question: "How long does it take to resolve a complaint?",
                  answer:
                    "We aim to resolve most complaints within 7 business days. Complex issues may take longer, and we'll keep you updated throughout the process.",
                },
                {
                  question: "Can I track the status of my complaint?",
                  answer:
                    "Yes, we'll provide you with a reference number and regular updates via email or phone about the status of your complaint.",
                },
                {
                  question: "What if I'm not satisfied with the resolution?",
                  answer:
                    "If you're not satisfied, you can request an escalation to our management team for further review and consideration.",
                },
                {
                  question: "Is my complaint information kept confidential?",
                  answer:
                    "Yes, all complaint information is handled confidentially and only shared with relevant team members involved in the resolution process.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="font-bold text-lg text-foreground mb-2">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
