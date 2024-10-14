// mixins/videoPaginationMixin.js
export default {
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 9,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.videos.length / this.itemsPerPage);
    },
    paginatedVideos() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.videos.slice(start, start + this.itemsPerPage);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
};
