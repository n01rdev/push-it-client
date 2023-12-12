export class User {
    email: string;
    password: string;

    validatePassword(confirmPassword: string): void {
        if (this.password !== confirmPassword) {
            throw new Error('Passwords do not match.');
        }

        if (this.password.length < 8) {
            throw new Error('Password must be at least 8 characters.');
        }

        if (!RegExp(/[A-Z]/).exec(this.password)) {
            throw new Error('Password must contain at least one capital letter.');
        }

        if (!RegExp(/[a-z]/).exec(this.password)) {
            throw new Error('Password must contain at least one lowercase letter.');
        }

        if (!RegExp(/\d/).exec(this.password)) {
            throw new Error('Password must contain at least one number.');
        }

        if (!RegExp(/[!@#$%^&*]/).exec(this.password)) {
            throw new Error('Password must contain at least one special character.');
        }
    }
}