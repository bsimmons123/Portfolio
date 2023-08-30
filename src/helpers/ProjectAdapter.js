class ProjectAdapter {
    constructor(adapter) {
        this.title = adapter.title;
        this.description = adapter.description;
        this.canView = adapter.canView;
        this.githubLink = adapter.githubLink;
        this.image = adapter.image;
        this.viewLink = adapter.viewLink;
    }
}

// Export the adapter for use in your application
export default ProjectAdapter;
