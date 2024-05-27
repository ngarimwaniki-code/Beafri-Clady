# Beafri Clady

Beafri Clady is an e-commerce platform specifically designed for clothes, shoes, and fashion items. This project uses Django for the backend and includes a detailed structure for easy collaboration between backend and frontend developers.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

## Features

### Backend Features

- **User Authentication**: User registration, login, and profile management.
- **Product Management**: Adding, editing, and deleting products.
- **Shopping Cart**: Adding items to the cart, updating quantities, and removing items.
- **Order Management**: Placing orders, viewing order history, and managing orders.
- **Reviews and Ratings**: Users can leave reviews and ratings for products.
- **Payment Integration**: Integration with payment gateways for processing payments.

### Frontend Features

- **Responsive Design**: Ensuring a seamless experience across devices.
- **Product Display**: Listing products with sorting and filtering options.
- **Cart Functionality**: Viewing and modifying items in the cart.
- **Checkout Process**: User-friendly checkout experience.
- **User Profiles**: Viewing and editing user profiles.
- **Order Tracking**: Tracking the status of orders.
- **Search Functionality**: Searching for products.

## Project Structure

```
BeafriClady/
├── beafri_clady/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   ├── asgi.py
│   ├── templates/
│   │   ├── base.html
│   │   ├── registration/
│   │   │   ├── login.html
│   │   │   ├── register.html
│   │   ├── products/
│   │   │   ├── product_list.html
│   │   │   ├── product_detail.html
│   │   ├── cart/
│   │   │   ├── cart_detail.html
│   │   │   ├── checkout.html
│   │   ├── orders/
│   │   │   ├── order_confirmation.html
│   ├── static/
│   │   ├── css/
│   │   │   ├── styles.css
│   │   ├── js/
│   │   │   ├── scripts.js
│   │   ├── images/
│   ├── media/
├── accounts/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── views.py
│   ├── urls.py
│   ├── forms.py
│   ├── templates/
│   │   ├── accounts/
│   │       ├── profile.html
├── products/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── views.py
│   ├── urls.py
│   ├── forms.py
│   ├── templates/
│   │   ├── products/
│   │       ├── product_list.html
│   │       ├── product_detail.html
├── cart/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── views.py
│   ├── urls.py
│   ├── forms.py
│   ├── templates/
│   │   ├── cart/
│   │       ├── cart_detail.html
│   │       ├── checkout.html
├── orders/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── views.py
│   ├── urls.py
│   ├── forms.py
│   ├── templates/
│   │   ├── orders/
│   │       ├── order_confirmation.html
├── reviews/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── views.py
│   ├── urls.py
│   ├── forms.py
│   ├── templates/
│   │   ├── reviews/
│   │       ├── review_list.html
│   │       ├── review_form.html
├── manage.py
├── requirements.txt
├── README.md
├── .gitignore
```

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ngari-mwaniki/beafri-clady.git
   cd beafri_clady
   ```

2. **Create a virtual environment:**

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Apply migrations:**

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Create a superuser:**

   ```bash
   python manage.py createsuperuser
   ```

6. **Run the development server:**

   ```bash
   python manage.py runserver
   ```

7. **Access the site:**

   Open your web browser and go to `http://127.0.0.1:8000`.

## Usage

- **Admin Dashboard:** Accessible at `http://127.0.0.1:8000/admin` with the superuser credentials.
- **User Authentication:** Register and login to access user-specific features.
- **Product Management:** Add, edit, and delete products from the admin dashboard.
- **Cart and Orders:** Add products to the cart, proceed to checkout, and place orders.
- **Reviews:** Leave reviews and ratings for products.

## Running Tests

To run tests, use the following command:

```bash
python manage.py test
```

## Contributing

1. **Fork the repository**
2. **Create a new branch:**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Make your changes**
4. **Commit your changes:**

   ```bash
   git commit -m 'Add some feature'
   ```

5. **Push to the branch:**

   ```bash
   git push origin feature/YourFeature
   ```

6. **Create a pull request**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*Beafri Clady - Your one-stop shop for fashion items.*
