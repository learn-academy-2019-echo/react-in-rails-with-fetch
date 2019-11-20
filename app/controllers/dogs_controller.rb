class DogsController < ApplicationController
    def index
        dogs = Dog.all
        render json: dogs
    end

    def create
        dog = Dog.create(dog_params)
        if dog.valid?
            render json: dog
        else
            render json: dog.errors, status: :unrpocessable_entity
        end
    end

    private
    def dog_params
        params.require(:dog).permit(:name, :age, :enjoys)
    end

end
