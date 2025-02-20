let uploadedImage = '';
        document.getElementById('image').addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    uploadedImage = e.target.result;
                    document.getElementById('imagePreview').src = uploadedImage;
                }
                reader.readAsDataURL(file);
            }
        });

        function getStarRating(rating) {
            return '★'.repeat(rating) + '☆'.repeat(5 - rating);
        }

        function previewFeedback() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const course = document.getElementById('course').value;
            const ratingValue = document.querySelector('input[name="rating"]:checked')?.value || '0';
            const rating = getStarRating(parseInt(ratingValue));
            const feedback = document.getElementById('feedback').value;

            const previewContent = `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Course:</strong> ${course}</p>
                <p><strong>Rating:</strong> <span class="star-rating-display">${rating}</span></p>
                <p><strong>Feedback:</strong></p>
                <p>${feedback}</p>
                ${uploadedImage ? `
                <div class="preview-image-container">
                    <p><strong>Uploaded Image:</strong></p>
                    <img src="${uploadedImage}" class="preview-image" alt="Uploaded preview">
                </div>` : ''}
            `;
            
            document.getElementById('previewContent').innerHTML = previewContent;
            document.getElementById('previewSection').classList.add('show');

        }

        document.getElementById('feedbackForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Feedback submitted successfully!');
            this.reset();
            document.getElementById('imagePreview').src = '';
            uploadedImage = '';
            document.getElementById('previewSection').classList.remove('show');
        });