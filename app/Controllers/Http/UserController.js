'use strict'

class UserController {
    async index(){
        return {result: 'buscou todos os usuarios'}
    }

    async show(){
        return {result: 'buscou o usuario 1'}
    }
    async update(){
        return {result: 'atualizando o usuario 1'}
    }

    async store(){
        return {result: 'buscou o usuario 1'}
    }

    async destroy(){
        return {result: 'buscou o usuario 1'}
    }
}

module.exports = UserController
