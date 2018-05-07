class ExampleMailer < ApplicationMailer
    default from: "rightsrequestsnoreply@gmail.com"

    def sample_email(user)
      @user = user
      mail(to: @user.email, subject: 'Welcome')
    end
end
