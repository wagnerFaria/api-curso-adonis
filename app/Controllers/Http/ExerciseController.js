'use strict'

const Exercise = use("App/Models/Exercise")
const Helpers = use("Helpers")
class ExerciseController {

    async index({ request }) {
        console.log(request.all())
        return await Exercise.all()
    }

    async show({ params }) {
        const exercise = await Exercise.findOrFail(params.id)
        return exercise
    }
    async update({ params, request }) {
        const exercise = await Exercise.findOrFail(params.id)
        const data = request.only([
            "name",
            "observation",
            "series",
            "waiting_time",
            "url_image"
        ]);

        exercise.merge(data)
        await exercise.save()
        return exercise
    }

    async store({ request, response }) {
        const data = request.only([
            "name",
            "observation",
            "series",
            "waiting_time",
            "url_image"
        ]);

        const photo = request.file('image', {
            types: ['image'],
            size: '2mb'
        })

        if (photo) {
            const image = await Exercise.findBy('url_image', photo.clientName)

            if (image) {
                return response.status(400).send({
                    error: {
                        message: 'Imagem com nome duplicado. Modifique o nome.',
                        name: 'DuplicatedImage'
                    }
                })
            }

            await photo.move(Helpers.publicPath('exercises'))
            data.url_image = photo.clientName
        }

        // console.log(request.input('action_by'))
        const exercise = await Exercise.create(data)
        return exercise
    }

    async destroy({ params }) {
        const exercise = await Exercise.findOrFail(params.id)
        return await exercise.delete()
    }
}

module.exports = ExerciseController
