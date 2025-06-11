class ProjectAdapter {
    constructor(title, description, canView, githubLink, image, viewLink) {
        this.title = title;
        this.description = description;
        this.canView = canView;
        this.githubLink = githubLink;
        this.image = image;
        this.viewLink = viewLink;
    }
}

// Export the adapter for use in your application
export default ProjectAdapter;
