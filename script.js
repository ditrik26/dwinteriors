document.addEventListener("DOMContentLoaded", () => {
  const showToast = (text = "Email copied to clipboard") => {
    const toast = document.getElementById("toast");
    if (!toast) return;

    const label = toast.querySelector(".toast-text");
    if (label) label.textContent = text;

    toast.classList.add("show");
    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  };

  document.querySelectorAll("[data-copy-email]").forEach((button) => {
    button.addEventListener("click", async (event) => {
      event.preventDefault();

      try {
        await navigator.clipboard.writeText("wienekedesigns@gmail.com");
        showToast("wienekedesigns@gmail.com copied to clipboard");
      } catch (error) {
        window.location.href = "mailto:wienekedesigns@gmail.com?subject=Interior%20Design%20Commission%20Inquiry%20-%20DW%20Interiors";
      }
    });
  });
});
