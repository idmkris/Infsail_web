FROM jenkins/jenkins:lts-jdk21

# Switch to the root user to install additional software
USER root

# Update package lists and install essential packages
RUN apt-get update && apt-get install -y \
    lsb-release \
    ca-certificates \
    curl \
    gnupg

# Add Docker’s official GPG key and repository
RUN install -m 0755 -d /etc/apt/keyrings && \
    curl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg && \
    chmod a+r /etc/apt/keyrings/docker.gpg && \
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker CLI
RUN apt-get update && apt-get install -y docker-ce-cli

# Install Node.js (LTS) and npm for Next.js
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - && \
    apt-get install -y nodejs

# Install yarn globally (optional, if you use yarn)
RUN npm install -g yarn

# Switch back to the Jenkins user
USER jenkins

# Install the latest versions of Blue Ocean and Docker Workflow plugins
RUN jenkins-plugin-cli --plugins "blueocean docker-workflow"

# Expose the default Jenkins port
EXPOSE 8080

# Expose the Jenkins agent port
EXPOSE 50000

# Command to start Jenkins
ENTRYPOINT ["/usr/bin/tini", "--", "/usr/local/bin/jenkins.sh"]

