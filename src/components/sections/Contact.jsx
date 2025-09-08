import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import EarthCanvas from "../canvas/Earth";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;
const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;
const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;
const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: ${({ disabled }) => 
    disabled 
      ? "rgba(128, 128, 128, 0.5)" 
      : "hsla(271, 100%, 50%, 1)"
  };
  background: ${({ disabled }) => 
    disabled 
      ? "rgba(128, 128, 128, 0.5)" 
      : "linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)"
  };
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: ${({ disabled }) => disabled ? "not-allowed" : "pointer"};
  transition: all 0.3s ease;

  &:hover {
    transform: ${({ disabled }) => disabled ? "none" : "translateY(-2px)"};
  }
`;

const MessageDisplay = styled.div`
  padding: 12px 16px;
  border-radius: 8px;
  margin-top: 12px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  background-color: ${({ success }) => 
    success 
      ? "rgba(34, 197, 94, 0.1)" 
      : "rgba(239, 68, 68, 0.1)"
  };
  border: 1px solid ${({ success }) => 
    success 
      ? "rgba(34, 197, 94, 0.3)" 
      : "rgba(239, 68, 68, 0.3)"
  };
  color: ${({ success, theme }) => 
    success 
      ? "#22c55e" 
      : "#ef4444"
  };
`;

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      emailjs
        .sendForm(
          "service_8aebk5i",
          "template_inxxex4",
          form.current,
          "3bRpwtcx-3rYV5sb1"
        )
        .then(
          (result) => {
            setMessage("Message sent successfully! I'll get back to you soon.");
            if (form.current) {
              form.current.reset();
            }
            setLoading(false);
          },
          (error) => {
            setMessage("Failed to send message. Please try again or contact me directly.");
            setLoading(false);
            console.error("EmailJS error:", error);
          }
        )
        .catch((error) => {
          setMessage("An unexpected error occurred. Please try again later.");
          setLoading(false);
          console.error("Unexpected error:", error);
        });
    } catch (error) {
      setMessage("An unexpected error occurred. Please try again later.");
      setLoading(false);
      console.error("Form submission error:", error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <EarthCanvas />
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput 
            placeholder="Your Email" 
            name="from_email" 
            type="email"
            required
            disabled={loading}
          />
          <ContactInput 
            placeholder="Your Name" 
            name="from_name" 
            required
            disabled={loading}
          />
          <ContactInput 
            placeholder="Subject" 
            name="subject" 
            required
            disabled={loading}
          />
          <ContactInputMessage 
            placeholder="Message" 
            name="message" 
            rows={4}
            required
            disabled={loading}
          />
          <ContactButton 
            type="submit" 
            value={loading ? "Sending..." : "Send"} 
            disabled={loading}
          />
          {message && (
            <MessageDisplay success={message.includes("successfully")}>
              {message}
            </MessageDisplay>
          )}
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
