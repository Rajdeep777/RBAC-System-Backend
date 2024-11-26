class ResourceController {
  getAdminResource(req, res) {
    res.status(200).send("Admin Resource Accessed");
  }
  getModeratorResource(req, res) {
    res.status(200).send("Moderator Resource Accessed");
  }
  getUserResource(req, res) {
    res.status(200).send("User Resource Accessed");
  }
}
export default ResourceController;
