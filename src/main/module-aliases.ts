import moduleAlias from 'module-alias';
moduleAlias.addAliases({
    '@Controllers': __dirname + '/../presentation/controllers',
    '@Helpers': __dirname + '/../presentation/helpers',
    '@UseCases': __dirname + '/../domain/usecases',
    '@Repositories': __dirname + '/../domain/repositories',
    '@Models': __dirname + '/../domain/models',
    '@Libs': __dirname + '/../domain/libraries',
    '@Data': __dirname + '/../data',
});