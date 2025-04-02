"use client"

import type React from "react"

import { Form, useActionData } from "@remix-run/react"
import { json, type ActionFunctionArgs } from "@remix-run/node"
import { motion } from "framer-motion"
import { CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "~/utils/firebase"

type ActionData = { success: false; errors: Record<string, string> } | { success: true; message: string }

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData()
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // Validate form data
  const errors: Record<string, string> = {}

  if (!name || typeof name !== "string" || name.trim() === "") {
    errors.name = "Name is required"
  }

  if (!email || typeof email !== "string" || email.trim() === "") {
    errors.email = "Email is required"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Invalid email address"
  }

  if (!message || typeof message !== "string" || message.trim() === "") {
    errors.message = "Message is required"
  }

  if (Object.keys(errors).length > 0) {
    return json({ errors, success: false })
  }

  try {
    // Store the message in Firestore
    const contactMessagesRef = collection(db, "contact_messages")
    await addDoc(contactMessagesRef, {
      name,
      email,
      message,
      timestamp: serverTimestamp(),
    })

    return json({
      success: true,
      message: `Thanks for reaching out, ${name}! I'll get back to you soon.`,
    })
  } catch (error) {
    console.error("Error saving contact message:", error)
    return json({
      success: false,
      errors: { form: "Failed to send message. Please try again later." },
    })
  }
}

export default function Contact() {
  const actionData = useActionData<typeof action>() as ActionData | undefined
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="pt-24">
      {/* Hero section */}
      <section className="px-6 md:px-12 py-12 md:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-zinc-400 mb-8">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact form section */}
      <section className="px-6 md:px-12 py-12 md:py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-zinc-400 mb-8 max-w-md">
                Fill out the form and I'll get back to you as soon as possible. You can also reach me directly using the
                contact information below.
              </p>

              <div className="space-y-6">
                <ContactInfo
                  icon={<Mail className="w-6 h-6 text-emerald-400" />}
                  title="Email"
                  content="psarojanurag@gmail.com"
                  link="mailto:psarojanurag@gmail.com"
                />

                <ContactInfo
                  icon={<Phone className="w-6 h-6 text-emerald-400" />}
                  title="Phone"
                  content="+91 933556 7259"
                  link="tel:+919335567259"
                />

                <ContactInfo
                  icon={<MapPin className="w-6 h-6 text-emerald-400" />}
                  title="Location"
                  content="Pratapgarh, India"
                  link="#"
                />
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Connect with Me</h3>
                <div className="flex gap-4">
                  <SocialLink href="https://github.com/Anu074" label="GitHub" />
                  <SocialLink href="https://www.linkedin.com/in/anurag-saroj-17114526b/" label="LinkedIn" />
                  <SocialLink href="https://www.youtube.com/@anuragsaroj7" label="YouTube" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              {actionData?.success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-8 flex flex-col items-center justify-center h-full"
                >
                  <CheckCircle className="w-16 h-16 text-emerald-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-4 text-center">Message Sent!</h3>
                  <p className="text-zinc-400 text-center mb-8">{actionData.message}</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-3 rounded-lg bg-emerald-500 text-zinc-900 font-medium hover:bg-emerald-400 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
                  <Form method="post" className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-zinc-400 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg bg-zinc-800 border ${
                          actionData?.errors?.name ? "border-red-500" : "border-zinc-700"
                        } focus:outline-none focus:border-emerald-500 transition-colors`}
                        placeholder="Your name"
                      />
                      {actionData?.errors?.name && (
                        <p className="mt-1 text-red-500 text-sm">{actionData.errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-zinc-400 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg bg-zinc-800 border ${
                          actionData?.errors?.email ? "border-red-500" : "border-zinc-700"
                        } focus:outline-none focus:border-emerald-500 transition-colors`}
                        placeholder="Your email address"
                      />
                      {actionData?.errors?.email && (
                        <p className="mt-1 text-red-500 text-sm">{actionData.errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-zinc-400 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full px-4 py-3 rounded-lg bg-zinc-800 border ${
                          actionData?.errors?.message ? "border-red-500" : "border-zinc-700"
                        } focus:outline-none focus:border-emerald-500 transition-colors`}
                        placeholder="Your message"
                      />
                      {actionData?.errors?.message && (
                        <p className="mt-1 text-red-500 text-sm">{actionData.errors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3 rounded-lg bg-emerald-500 text-zinc-900 font-medium hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2"
                    >
                      Send Message
                      <Send size={18} />
                    </button>
                  </Form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="px-6 md:px-12 py-12 md:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Find Me Here</h2>
            <p className="text-zinc-400 max-w-2xl">
              Based in Lucknow, India. Available for remote work and collaborations worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl overflow-hidden h-[400px] bg-zinc-900 border border-zinc-800"
          >
            {/* Placeholder for map - in a real implementation, you would use a map component */}
            <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
              <div className="text-zinc-500 text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-emerald-400" />
                <p className="text-xl font-medium">Map placeholder</p>
                <p className="text-sm mt-2">Lucknow, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function ContactInfo({
  icon,
  title,
  content,
  link,
}: {
  icon: React.ReactNode
  title: string
  content: string
  link: string
}) {
  return (
    <a
      href={link}
      className="flex items-start gap-4 group"
      target={link.startsWith("mailto:") || link.startsWith("tel:") ? "_self" : "_blank"}
      rel="noopener noreferrer"
    >
      <div className="p-3 rounded-lg bg-zinc-800 group-hover:bg-emerald-500/10 transition-colors">{icon}</div>
      <div>
        <h3 className="text-lg font-medium mb-1">{title}</h3>
        <p className="text-zinc-400 group-hover:text-emerald-400 transition-colors">{content}</p>
      </div>
    </a>
  )
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:border-emerald-400 hover:text-emerald-400 transition-colors"
      aria-label={label}
    >
      {label === "GitHub" && "GH"}
      {label === "LinkedIn" && "LI"}
      {label === "YouTube" && "YT"}
    </a>
  )
}

