# Welcome to my Portfolio Website! 🚀

## Contact Form Setup

This portfolio includes a custom contact form that sends emails without using third-party services like EmailJS.

### Email Configuration

1. **Gmail Setup**: 
   - Enable 2-factor authentication on your Gmail account
   - Generate an App Password: Go to Google Account Settings > Security > 2-Step Verification > App passwords
   - Create a new app password for "Mail"

2. **Environment Variables**:
   - Update the `.env` file with your email credentials:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

3. **Running the Application**:
   ```bash
   # Install dependencies
   npm install
   
   # Run both frontend and backend
   npm run dev
   
   # Or run separately:
   # Backend only
   npm run server
   
   # Frontend only (in another terminal)
   npm start
   ```

### Features

- **Secure Email Sending**: Uses Nodemailer with Gmail SMTP
- **Form Validation**: Client and server-side validation
- **Error Handling**: Comprehensive error messages
- **Loading States**: Visual feedback during form submission
- **Responsive Design**: Works on all devices
- **No Third-Party Dependencies**: Complete control over email functionality

### API Endpoints

- `POST /api/contact` - Send contact form email
- `GET /api/health` - Server health check

### Security Notes

- Never commit your `.env` file to version control
- Use App Passwords instead of your regular Gmail password
- The server validates all input data
- Emails are sent to your own email address for security

## Skills Section:

In the Skills section of my portfolio website, you will find a comprehensive list of my technical abilities and expertise 💡. I have honed my skills in the MERN (MongoDB, Express.js, React.js, Node.js) stack, enabling me to create robust and scalable web applications 🏢. Additionally, I have proficiency in front-end technologies such as HTML5, CSS3, and JavaScript, along with experience in backend development, API integration, and database management 💻. With a keen eye for detail and a passion for delivering high-quality code, I am ready to tackle any project 💪.

## Projects Section:

Explore the Projects section of my portfolio website to see some of the exciting web development projects I have worked on 💡. From interactive websites to dynamic web applications, each project showcases my ability to translate ideas into functional and visually appealing digital experiences ✨. You can learn more about the technologies utilized, project goals, and my role in the development process 📖. Feel free to navigate through the live demos or check out the source code on GitHub 🔗.

## Education Section:

In the Education section, you will find details about my academic background and professional certifications 📚. I have pursued a rigorous course of study to build a strong foundation in computer science and software engineering 👩‍💻. My educational journey has equipped me with the theoretical knowledge and practical skills necessary to excel in the field 🎓. I continuously engage in self-learning to stay updated with the latest industry trends and emerging technologies 💡.

## Testimonials Section:

Discover what others have to say about my work in the Testimonials section 💬. Colleagues, clients, and collaborators have provided their valuable feedback, highlighting my dedication, creativity, and problem-solving abilities 💡. Their testimonials serve as a testament to my commitment to delivering exceptional results and fostering positive working relationships 🤝. Take a moment to read their experiences and gain insights into how I can contribute to your projects 💡.

## Contact Me Section:

If you are interested in collaborating, have any questions, or simply want to get in touch, the Contact Me section provides multiple ways to connect with me 💌. You can fill out the contact form, send an email, or reach out through my social media profiles 🔗. I am always open to new opportunities, discussing potential projects, or answering any queries you may have 💡. I strive to maintain clear and prompt communication, ensuring a seamless experience for potential clients, collaborators, and employers 🤝.

Thank you for visiting my Portfolio Website. I hope you find the information and examples showcased here valuable in understanding my skills and capabilities as a web developer. I look forward to the possibility of working together and bringing your ideas to life! 💡