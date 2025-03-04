
export const navigateToProductsSection = (
  e: React.MouseEvent, 
  onItemClick?: () => void
) => {
  // Prevent default behavior
  e.preventDefault();
  e.stopPropagation();

  // Navigate to home page and scroll to solutions section
  if (window.location.pathname !== '/') {
    window.location.href = '/#solutions';
  } else {
    // If already on home page, just scroll to the section
    const solutionsSection = document.getElementById('solutions');
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Call original onClick if provided
  if (onItemClick) onItemClick();
};
