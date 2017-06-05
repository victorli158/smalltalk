class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = el.dataset.userId;
    this.followState = this.dataset.initialFollowState;
  }
}

module.exports = FollowToggle;
