module Jekyll

  class TextileConverter < Converter

    REPLACEMENTS = {"<honza>" => "<div id='part-honza' class='partial-post'>",
                    "</honza>" => "</div>",
                    "<fafa>" => "<div  id='part-fafa' class='partial-post'>",
                    "</fafa>" => "</div>", }

    def convert(content)
      setup
      REPLACEMENTS.each { |mark, replacement| content.sub!(mark, replacement) }
      RedCloth.new(content).to_html
    end

  end

end
