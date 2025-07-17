const portfolioData = {
  name: "Alex Doe",
  title: "Passionate Machine Learning Student",
  about: {
    intro:
      "I'm Alex Doe, a writer, researcher, and computer scientist. I grew up with a fascination for how things work, which led me to the intricate world of machine learning.",
    focus:
      "My focus is on ML/AI systems in production. I'm currently exploring creative use cases of AI in natural language processing and reinforcement learning.",
    experience:
      "Previously, I've contributed to open-source ML tooling and interned at a leading tech company, working on their core AI infrastructure. These experiences taught me the complexities of building robust and scalable ML systems.",
    passion:
      "I enjoy learning about fun technical challenges and collaborating with great teams. My goal is to contribute to building intelligent systems that are not only powerful but also ethical and beneficial to society.",
    contact:
      "Reach out if you want to collaborate on a project or just chat about the latest in AI!",
  },
  projects: [
    {
      title: "Neural Network from Scratch",
      description:
        "A comprehensive implementation of a feed-forward neural network in Python, explaining backpropagation and gradient descent.",
      tags: ["Python", "NumPy", "Deep Learning"],
      link: "https://github.com/your-username/your-repo",
      liveDemo: null,
    },
    {
      title: "Real-Time Object Detection App",
      description:
        "A web application using TensorFlow.js to perform real-time object detection directly in the browser.",
      tags: ["TensorFlow.js", "React", "Computer Vision"],
      link: "https://github.com/your-username/your-repo",
      liveDemo: "https://your-demo-link.com",
    },
    {
      title: "Sentiment Analysis API",
      description:
        "A RESTful API built with Flask that classifies text as positive, negative, or neutral using a pre-trained transformer model.",
      tags: ["Python", "Flask", "Hugging Face"],
      link: "https://github.com/your-username/your-repo",
      liveDemo: null,
    },
  ],
  // This is placeholder data. In a real app, you would fetch this from your headless CMS.
  blogPosts: [
    {
      id: 1,
      title: "Understanding Attention Mechanisms in Transformers",
      date: "July 15, 2025",
      excerpt:
        "The transformer architecture has revolutionized NLP, and at its core is the attention mechanism. This post breaks down how self-attention works, with illustrations and code snippets...",
      link: "/blog/understanding-attention",
    },
    {
      id: 2,
      title: "A Practical Guide to ML Model Deployment",
      date: "June 28, 2025",
      excerpt:
        "Building a model is one thing, but deploying it to production is another. We explore various strategies from simple containerization with Docker to serverless deployments on cloud platforms...",
      link: "/blog/ml-deployment-guide",
    },
  ],
  contact: {
    email: "your.email@example.com",
  },
  socials: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    twitter: "https://twitter.com/your-username",
  },
};

export default portfolioData;
