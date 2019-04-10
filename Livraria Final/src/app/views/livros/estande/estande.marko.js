// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/casa$1.0.0/src/app/views/livros/estande/estande.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"><link rel=\"stylesheet\" href=\"/estatico/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"/estatico/css/fontawesome.min.css\"><link rel=\"stylesheet\" href=\"/estatico/css/estilo.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header class=\"cabecalhoPrincipal\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-4\"><h1 class=\"logo\"><img src=\"/estatico/imagens/logo.png\" alt=\"Livraria\" width=\"75\">Livraria Futuro</h1></div><div class=\"cabecalhoPrincipal-navegacao col-8\"><a href=\"/login\" class=\"login\"><i class=\"fas fa-sign-in-alt\"></i>Administrativo</a></div></div></div></header><div class=\"container\" id=\"menuPrincipal\"><nav id=\"menu\"><ul><li id=\"menuT\"><a href=\"/\">Home</a></li><li id=\"menuT\"><a href=\"/QuemSomos\">Quem Somos</a></li><li id=\"menuT\"><a href=\"/estande\">Estande de Livros</a></li><li id=\"menuT\"><a href=\"/estandeLivros\">Lançamentos</a></li></ul></nav></div><main class=\"conteudoPrincipal\"><div class=\"container\"><h1> Listagem de livros </h1><table id=\"livros\" class=\"table table-striped table-hover\"><thead class=\"thead-dark\"><tr><th>ID</th><th>Título</th><th>Descrição</th><th>Solicitar</th></tr></thead><tbody>");

  var for__38 = 0;

  marko_forEach(data.livros, function(livro) {
    var keyscope__39 = "[" + ((for__38++) + "]");

    out.w("<tr id=\"livro_" +
      marko_escapeXmlAttr(livro.id) +
      "\"><td>" +
      marko_escapeXml(livro.id) +
      "</td><td>" +
      marko_escapeXml(livro.titulo) +
      "</td><td>" +
      marko_escapeXml(livro.descricao) +
      "</td><td><a href=\"#\" data-ref=\"" +
      marko_escapeXmlAttr(livro.id) +
      "\" data-type=\"remocao\">Solicitar</a></td></tr>");
  });

  out.w("</tbody></table></div></main><footer class=\"rodape\"><div class=\"container\"><div class=\"row align-items-center\" id=\"center\"><div class=\"col-6\" id=\"center\"><p>Copyright &copy; 2019 - by Larissa Morais and Celso Eduardo <br></p></div></div></div></footer><script src=\"/estatico/js/solicita-livro.js\">\r\n    </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "53");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/casa$1.0.0/src/app/views/livros/estande/estande.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
