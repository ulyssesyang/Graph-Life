# Use an official Python runtime as a parent image
FROM python:3

# Set the working directory to /usr/src/app
WORKDIR /usr/src/app

# Copy docker_requirement
COPY docker_requirement.txt ./

# Install any needed packages specified in docker_requirement.txt
RUN pip install --no-cache-dir -r docker_requirement.txt